import { useState } from 'react';
// import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';

import React from 'react';
export function Searchbar({ onSubmit }) {
  const [searchText, setSearchText] = useState('');

  const handleSetQuery = e => {
    setSearchText(e.target.value);
  };

  // const handleSubmitForm = e => {
  //   e.preventDefault();
  //   if (query.trim() === '') {
  //     return toast('enter your request please!', {
  //       position: 'top-center',
  //       hideProgressBar: true,
  //     });
  //   }
  //   dispatch({
  //     type: 'handleSubmitForm',
  //     payload: { page: 1, isPending: true },
  //   });
  // };

  return (
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span>
            <ImSearch />
          </span>
        </button>

        <input
          onChange={handleSetQuery}
          value={searchText}
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
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
