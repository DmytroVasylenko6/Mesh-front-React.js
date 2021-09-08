import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../images/default-avatar.png';

export default function SearchResultsList({ list }) {
  return (
    <ul className="search-results-list">
      {list.map(({ id, name }) => {
        return (
          <li id={id} key={id} className="search-results-list__item">
            <img
              className="search-results-list__image"
              src={defaultAvatar}
              alt="avatar"
              width="30"
              height="30"
            />
            <p className="search-results-list__name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

SearchResultsList.propTypes = {
  list: PropTypes.array.isRequired,
};
