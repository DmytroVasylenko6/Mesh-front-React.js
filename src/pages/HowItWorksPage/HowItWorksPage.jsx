import React from 'react';
import SubHeader from '../../components/SubHeader';
import SideBar from '../../components/SideBar';
import { Row, Col, Button } from 'antd';
import paths from '../../utils/paths';
import {Link} from "react-router-dom";

export default function HowItWorksPage() {
  return (
    <div className="how-it-works-page">
      <SubHeader title="How It Works?" />

      <div className="how-it-works-page__container container">

        <SideBar>
          <Button type="default" className="sidebar__button">
            <Link to={paths.home}>HomePage</Link>
          </Button>
          <Button
            type="default"
            className="sidebar__button">
            <Link to={paths.partnerLocator}>Partners locator</Link>
          </Button>
          <Button
            type="default"
            className="sidebar__button">
            <Link to={paths.consultantLocator}>Consultants locator</Link>
          </Button>
        </SideBar>

        <div className="text-content">
          <Row gutter={[{xl: 60}, 16]}>
            <Col span={24} xl={8}>
              <Row gutter={[0, {xs: 15, sm: 15, xl: 30}]} className="text-content__row-1">
                <Col className="description" span={24}>
                  <p>
                    Mesh is a community of businesses who may help each other.
                  </p>
                </Col>
                <Col className="description" span={24}>
                  <Row>
                    <Col className="description" span={24}>
                      <p> + Here you can locate the right remote parnters</p>
                    </Col>
                    <Col className="description" span={24}>
                      <p>
                        + Here you can get advice from relevant or similar
                        businesses
                      </p>
                    </Col>
                    <Col className="description" span={24}>
                      <p> + Here you can also consult with professionals</p>
                    </Col>
                  </Row>
                </Col>
                <Col className="description" span={24}>
                  <p> We are here for you.</p>
                </Col>
              </Row>
            </Col>
            <Col span={24} xl={8}>
              <Row className="text-content__row-2" gutter={[0, 30]}>
                <Col className="text-content__description" span={24}>
                  <span className="text-content__count">1</span>
                  <p>Join Mesh. Registration process is quick and easy.</p>
                </Col>
                <Col className="text-content__description" span={24}>
                  <span className="text-content__count">2</span>
                  <p>
                    During this process you should tell us what is your Industry
                    and what type of partnership is relevant for you. The system
                    will find the right partner for your business.
                  </p>
                </Col>
                <Col className="text-content__description" span={24}>
                  <span className="text-content__count">3</span>
                  <p>
                    We create a <strong> Business Profile page </strong>for each
                    user. This profile page enables Mesh members to know each
                    other and to share messages.
                  </p>
                </Col>
                <Col className="text-content__description" span={24}>
                  <span className="text-content__count">4</span>
                  <p>
                    The <strong>Partner Locator</strong> feature, helps you to
                    find the relevant partners for you.
                  </p>
                </Col>
                <Col className="text-content__description" span={24}>
                  <span className="text-content__count">5</span>
                  <p>
                    Each Industry has a dedicated
                    <strong> Board / Forum </strong>
                    that enables members to exchange ideas, services , products
                    and questions.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col span={24} xl={8}>
              <Row className="text-content__row-3" gutter={[0, {xs: 30, sm: 30, xl: 170}]}>
                <Col className="text-content__description" span={24}>
                  <span className="text-content__count">6</span>
                  <p>
                    Mesh also enables you to contact Marketing or Business
                    professional consultants. For that you should go to the
                    <strong> Consultant Locator</strong> feature.
                  </p>
                </Col>
                <Col className="text-content__description" span={24}>
                  <span className="text-content__count">7</span>
                  <p>
                    Professional consultants are also invited to register to the
                    system and be part of
                    <strong> Mesh professionals pool</strong>.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
