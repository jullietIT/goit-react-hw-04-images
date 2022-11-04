// import { useState, useEffect, useRef } from 'react';
// import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
// import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';

import React from 'react';

const Searchbar = ({ query, handleSetQuery, handleSubmitForm }) => {
  return (
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmitForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span>Search</span>
        </button>

        <input
          onChange={handleSetQuery}
          value={query}
          name="query"
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Що шукаємо 😉?"
          pattern="^[0-9a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Щоб щось знайти, введіть пошукове слово, що складається з букв,апострофа,тире, цифр и пробілу."
        />
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  query: PropTypes.string.isRequired,
  handleSetQuery: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;

// export default Searchbar;

// const INITIAL_QUERY = 'hdr';

// const Searchbar = ({ searchQueryToUp }) => {
//   const [searchQuery, setSearchQuery] = useState(INITIAL_QUERY);

//   const inputRef = useRef();

//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       return;
//     }
//     searchQueryToUp(searchQuery);

//     inputRef.current.placeholder = searchQuery;
//     setSearchQuery('');
//   }, [searchQuery, searchQueryToUp]);

//   const handleInputChange = e => setSearchQuery(e.currentTarget.value);

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (searchQuery.trim() === '') {
//       toast.warn('Додайте щось..!', {
//         autoClose: 2000,
//         theme: 'colored',
//         icon: false,
//       });
//       return;
//     }
//     searchQueryToUp(searchQuery);
//     inputRef.current.placeholder = searchQuery;
//     setSearchQuery('');
//   };

//   return (
//     <div className={s.Searchbar}>
//       <form className={s.SearchForm} onSubmit={handleSubmit}>
//         <button type="submit" className={s.SearchFormButton}>
//           <ImSearch />
//         </button>
//         <label>
//           <input
//             className={s.SearchFormInput}
//             type="text"
//             name="searchInput"
//             ref={inputRef}
//             placeholder="search"
//             value={searchQuery}
//             onChange={handleInputChange}
//             pattern="^[0-9a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Щоб щось знайти, введіть пошукове слово, що складається з букв,апострофа,тире, цифр и пробілу."
//           />
//         </label>
//       </form>
//     </div>
//   );
// };

// Searchbar.propTypes = {
//   searchQuery: PropTypes.string,
// };

// export default Searchbar;
