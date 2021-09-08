import React from 'react';
import Container from '../common/Container';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from 'antd';
import paths from '../../utils/paths';

const { useBreakpoint } = Grid;

export default function Header() {
  let location = useLocation();

  const screens = useBreakpoint();

  const style =
    location.pathname === paths.businessRegStep4
      ? { position: 'relative' }
      : {};

  return (
    <>
      {location.pathname === paths.home && screens.xl ? (
        <footer className="site-footer-homepage" style={style}>
          <Container>
            <Row>
              <Col span={12}>
                <Row gutter={[60, 0]}>
                  <Col span={12}>All rights reserved Mesh 2021©</Col>
                  <Col span={12}>
                    <Link to={paths.contacts}>Contact Us</Link> /
                    <Link to={paths.terms}>Terms of Use</Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </footer>
      ) : (
        <footer className="site-footer-other-page" style={style}>
          <Container>
            <Row>
              <Col span={24}>
                <div className="site-footer-other-page__content">
                  <Link
                    to={paths.home}
                    className="site-footer-other-page__logo">
                    Mesh.
                  </Link>
                  <div className="site-footer-other-page__page-links">
                    <Link to={paths.contacts}>Contact Us</Link> /
                    <Link to={paths.terms}>Terms of Use</Link>
                  </div>
                  <span className="site-footer-other-page__text">
                    All rights reserved Mesh 2021©
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      )}
    </>
  );
}
