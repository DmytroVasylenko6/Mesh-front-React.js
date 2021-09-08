import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import defaultAvatar from '../../images/default-avatar.png';
import chatIcon from '../../images/svg/chat.svg';

export default function ForumList({ list }) {
  return (
    <div className="forum-container">
      <Button type="primary" className="forum-list__button">
        Share your message here
      </Button>
      <ul className="forum-list">
        {list.map(({ id, message }) => {
          return (
            <li id={id} key={id} className="forum-list__item">
              <img
                className="forum-list__image"
                src={defaultAvatar}
                alt="avatar"
                width="30"
                height="30"
              />
              <p className="forum-list__message">{message}</p>
              <img src={chatIcon} alt="chat" width="25" height="25" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ForumList.propTypes = {
  list: PropTypes.array.isRequired,
};
