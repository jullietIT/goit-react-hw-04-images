import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from '../../components/Modal/Modal.module.css';

function Modal({ handleTogleModal, modalImg, tag }) {
  const onCloseModalByEsc = e => {
    if (e.keyCode === 27) {
      handleTogleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onCloseModalByEsc);

    return () => {
      window.removeEventListener('keydown', onCloseModalByEsc);
    };
  });

  return (
    <div
      className={s.Overlay}
      onClick={e => {
        if (e.target === e.currentTarget) {
          handleTogleModal();
        }
      }}
    >
      <div className={s.Modal}>
        <img src={modalImg} alt={tag} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  handleTogleModal: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Modal;

// import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import s from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

// const Modal = ({
//   closeModalClick,
//   changeImg,
//   closeModalEsc,
//   modalOn,
//   changeImgKey,
//   children,
// }) => {
//   useEffect(() => {
//     window.addEventListener('keydown', e => handleKeyDown(e));
//   });

//   const closeModal = e => {
//     e.target === e.currentTarget && closeModalClick(true);
//   };

//   const handleKeyDown = e => {
//     e.code === 'Escape' && closeModalEsc();
//   };

//   return createPortal(
//     <div className={s.Overlay} onClick={closeModal}>
//       <div className={s.Modal}>{children}</div>
//     </div>,

//     modalRoot
//   );
// };

// export default Modal;
