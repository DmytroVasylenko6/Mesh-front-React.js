import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

export default function SideBar({ children }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Menu</h2>
      <Row gutter={[0, 25]}>
        {children.map(item => {
          return (
            <Col span={24} key={uuidv4()}>
              {item}
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

SideBar.propTypes = {
  children: PropTypes.array,
};
