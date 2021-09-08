import React, { useState, useEffect } from 'react';
import SubHeader from '../../components/SubHeader';
import Container from '../../components/common/Container';
import { Select, Button, Row, Col } from 'antd';
import paths from '../../utils/paths';
import MeshSelect from '../../components/common/MeshSelect/MeshSelect';
import { Link, useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';

const { Option } = Select;

export default function AreYouLookingForPartnerPage() {
  let { path } = useRouteMatch();
  const [lookingForPartners, setLookingForPartners] = useState();
  const [route, setRoute] = useState('/');

  useEffect(() => {
    if (path.indexOf(paths.consultantRegistration) !== -1) {
      setRoute(paths.consultantRegStep3);
    } else if (path.indexOf(paths.businessRegistration) !== -1) {
      setRoute(paths.businessRegStep3);
    }
  }, [path]);
  return (
    <div className="looking-for-partners-page">
      <SubHeader title="Are you looking for partners?" />
      <Container>
        <div className="second-step-container">
          <div className="step-box">
            <div className="step-box__step-1"></div>
            <div className="step-box__line"></div>
            <div className="step-box__step-2"></div>
          </div>

          <Row gutter={[10, 20]}>
            <Col span={24}>
              <p className="second-step-container__description">
                Looking for remote partners?
              </p>
            </Col>
            <Col span={24}>
              <div className="buttons-container">
                {/*
                TODO: later change it to radio buttons
                */}
                <Button
                  type="default"
                  className={classNames('second-step-container__button', {
                    'is-selected': lookingForPartners,
                  })}
                  onClick={() => setLookingForPartners(true)}>
                  Yes!
                </Button>
                <Button
                  type="default"
                  className={classNames('second-step-container__button', {
                    'is-selected': lookingForPartners === false,
                  })}
                  onClick={() => setLookingForPartners(false)}>
                  Nope
                </Button>
              </div>
            </Col>
            {/*<Col span={12}>*/}
            {/*  <Button*/}
            {/*    type="default"*/}
            {/*    className="second-step-container__button"*/}
            {/*    autoFocus>*/}
            {/*    Yes!*/}
            {/*  </Button>*/}
            {/*</Col>*/}
            {/*<Col span={12}>*/}
            {/*  <Button type="default" className="second-step-container__button">*/}
            {/*    Nope*/}
            {/*  </Button>*/}
            {/*</Col>*/}
            {lookingForPartners && (
              <>
                <Col span={24}>
                  <MeshSelect placeholder="Industry" defaultValue="lucy">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">Dima</Option>
                  </MeshSelect>
                </Col>
                <Col span={24}>
                  <Select
                    className="secont-step-container__select"
                    defaultValue="lucy"
                    style={{ width: '100%' }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">Dima</Option>
                  </Select>
                </Col>
              </>
            )}

            <Col span={24}>
              <Button
                type="primary"
                className="second-step-container__button-next">
                <Link to={route}>Next Step</Link>
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
