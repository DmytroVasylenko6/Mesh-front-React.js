import React, { useState, useRef } from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import defaultAvatar from '../../images/default-avatar.png';

export default function HistoryPartnersList({ list, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const listEl = useRef(null);

  return (
    <div className="history-partners">
      <h2 className="history-partners__title">History</h2>
      <div className="history-partners__container">
        <p className="history-partners__label">{label}</p>

        <CSSTransition
          classNames="e-fade"
          timeout={500}
          in={isOpen}
          appear={isOpen}
          unmountOnExit
          nodeRef={listEl}>
          <Row gutter={[0, 10]} className="history-partners__list" ref={listEl}>
            {list.map(({ id, name }) => {
              return (
                <Col span={24} key={id} className="history-partners__item">
                  <img
                    className="history-partners__image"
                    src={defaultAvatar}
                    alt="avatar"
                    width="30"
                    height="30"
                  />
                  <p className="history-partners__name">{name}</p>
                </Col>
              );
            })}
          </Row>
        </CSSTransition>

        <button
          className="history-partners__button"
          onClick={() => setIsOpen(!isOpen)}>
          See More
        </button>
      </div>
    </div>
  );
}

HistoryPartnersList.propTypes = {
  list: PropTypes.array,
};
