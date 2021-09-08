import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/common/Container';
import { Row, Col, Button } from 'antd';
import logo from '../../images/mesh.png';
import logo2x from '../../images/mesh@2x.png';
import logo3x from '../../images/mesh@3x.png';
import paths from '../../utils/paths';

export default function HomePage() {
  const isAuthenticated = false;
  return (
    <>
      <div className="homepage">
        <Container>
          <div className="homepage__container">
            <div className="homepage__left-box">
              <div className="homepage__logo-container">
                <img
                  className="homepage__logo"
                  srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`}
                  src={logo}
                  alt="logo"
                />
                <span className="homepage__logo-text">
                  Business Connections Network
                </span>
              </div>
            </div>
            <div className="homepage__right-box">
              <div className="homepage__background"></div>
              <Row gutter={[0, { xs: 20, sm: 20, xl: 40 }]}>
                <Col span={24}>
                  <h1 className="title">
                    Mesh is a community of Businesses who work together and help
                    each other
                  </h1>
                </Col>
                <Col span={24}>
                  <Row>
                    <Col className="description" span={24}>
                      + Here you can locate the right remote parnters
                    </Col>
                    <Col className="description" span={24}>
                      + Here you can get advice from relevant or similar
                      businesses
                    </Col>
                    <Col className="description" span={24}>
                      + Here you can also consult with professionals
                    </Col>
                  </Row>
                  <span className="bottom-text">We are here for you.</span>
                </Col>

                {isAuthenticated ? (
                  <Col span={24}>
                    <Row gutter={[10, 0]} justify="start">
                      <Col xs={24} xl={8}>
                        <Button type="primary" className="profile-button">
                          <Link to={paths.businessProfile}>My Profile</Link>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                ) : (
                  <Col xs={24} sm={24} className="register-buttons">
                    <Row gutter={[{ xl: 10 }, { xs: 10, sm: 10, xl: 0 }]}>
                      <Col xs={24} sm={24} xl={12}>
                        <Button type="primary" className="link-button">
                          <Link to={paths.businessRegistration}>
                            Businesses Registration
                          </Link>
                        </Button>
                      </Col>
                      <Col xs={24} sm={24} xl={12}>
                        <Button type="primary" className="link-button">
                          <Link to={paths.consultantRegistration}>
                            Consultants Registration
                          </Link>
                        </Button>
                      </Col>
                    </Row>
                    <span className="bottom-text">
                      Alredy using Mesh?
                      <Link to={paths.login} className="sign-in-link">
                        Sign in
                      </Link>
                    </span>
                  </Col>
                )}

                <Col span={24}>
                  <div className="button-container">
                    <Row gutter={[{ xl: 10 }, { xs: 10, sm: 10, xl: 0 }]}>
                      <Col xs={24} xl={8}>
                        <Button type="default" className="link-button">
                          <Link to={paths.partnerLocator}>Partner Locator</Link>
                        </Button>
                      </Col>
                      <Col xs={24} xl={8}>
                        <Button type="default" className="link-button">
                          <Link to={paths.consultantLocator}>
                            Consultant Locator
                          </Link>
                        </Button>
                      </Col>
                      <Col xs={24} xl={8}>
                        <Button type="default" className="link-button">
                          <Link to={paths.howItWorks}>How It works?</Link>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
