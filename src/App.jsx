import s from './App.css';
import { useReducer, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader';
import reducer from './Services/Reducer';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMore from './components/ImageGallery/LoadMore/LoadMore';
import Modal from './components/Modal/Modal';
import fetchImages from './Services/apiServis';
import initialState from './InitialState';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    query,
    images,
    isPending,
    page,
    isModalOpen,
    modalImg,
    modalAlt,
    total,
  } = state;

  const onSubmit = query => {
    dispatch({
      type: 'handleSubmit',
      payload: { page: 1, isPending: true, query },
    });
  };

  const handleTogleModal = (image, alt) => {
    dispatch({
      type: 'handleTogleModal',
      payload: {
        isModalOpen: !isModalOpen,
        modalImg: image || '',
        modalAlt: alt || '',
      },
    });
  };

  const handleLoadMore = () => {
    dispatch({
      type: 'handleLoadMore',
      payload: { page: page + 1, isPending: true },
    });
  };
  // scroll 1
  // import { useLayoutEffect, useRef } from 'react';
  //   const h2ref = useRef(null);

  //   useLayoutEffect(() => {
  //     h2ref.current.scrollIntoView();
  //   }, []);
  // scroll 2
  useEffect(() => {
    // код, который будет вызываться при каждом рендере компонента
    handleScroll();
  });
  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (isPending) {
      fetchImages(query, page)
        .then(data => {
          dispatch({ type: 'total', payload: { total: data.total } });
          if (data.hits.length === 0) {
            return (
              dispatch({ type: 'isPending', payload: { isPending: false } }),
              toast(
                `Oй!!! Щось нічого немає "${query}", пошукайте щось інше.`,
                {
                  position: 'top-center',
                  hideProgressBar: true,
                }
              )
            );
          }
          dispatch(
            page > 1
              ? {
                  type: 'fetchImages',
                  payload: {
                    images: [...images, ...data.hits],
                    isPending: false,
                  },
                }
              : {
                  type: 'fetchImages',
                  payload: { images: [...data.hits], isPending: false },
                }
          );
        })
        .catch(error => {
          console.log(error.massage);
        });
    }
  }, [images, isPending, page, query]);

  return (
    <div className={s.App}>
      <Searchbar
        onSubmit={onSubmit}
        // handleSetQuery={handleSetQuery}
        // handleSubmitForm={handleSubmitForm}
        // query={query}
      />
      {images.length >= 1 && (
        <ImageGallery handleTogleModal={handleTogleModal} images={images} />
      )}
      {isPending && <Loader />}
      {images.length >= 12 && images.length !== total && (
        <LoadMore handleLoadMore={handleLoadMore} />
      )}

      {isModalOpen && (
        <Modal
          modalImg={modalImg}
          handleTogleModal={handleTogleModal}
          tag={modalAlt}
        />
      )}
      <ToastContainer autoClose={2500} />
    </div>
  );
}

export default App;
