import React, { useState } from 'react';
import PropTypes from 'prop-types';
import data from './Searchbar.module.css';
import { toast } from 'react-toastify';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter your search query');
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={data.searchbar}>
      <form className={data.searchForm} onSubmit={handleSubmit}>
        <input
          onInput={handleInputChange}
          className={data.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
        />
        <button type="submit" className={data.searchFormButton}>
          search
        </button>
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
