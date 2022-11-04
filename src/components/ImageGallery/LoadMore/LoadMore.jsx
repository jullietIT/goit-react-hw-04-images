import React from 'react';

import PropTypes from 'prop-types';
import s from './LoadMore.module.css';

const LoadMore = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={s.loadMoreButton}>
      Load more
    </button>
  );
};

LoadMore.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default LoadMore;
