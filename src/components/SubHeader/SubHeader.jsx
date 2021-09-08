import React from 'react';
import { Row, Col, Grid } from 'antd';
import { Link } from 'react-router-dom';
import paths from '../../utils/paths';
import PropTypes from 'prop-types';

const { useBreakpoint } = Grid;

export default function SubHeader({ title }) {
  const screens = useBreakpoint();
  const isWide = screens.xl;
  return (
    <div className="terms-page__pseudo-header">
      <div className="container">
        {isWide ? (
          <Link to={paths.home} className="logo-link">
            Mesh.
          </Link>
        ) : (
          ''
        )}

        <Row>
          <Col span={24}>
            <h1 className="title">{title}</h1>
          </Col>
        </Row>
      </div>
    </div>
  );
}

SubHeader.propTypes = {
  title: PropTypes.string,
};
