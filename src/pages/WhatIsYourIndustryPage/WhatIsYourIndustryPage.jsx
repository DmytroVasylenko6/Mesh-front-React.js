import React, { useState, useEffect } from 'react';
import SubHeader from '../../components/SubHeader';
import Container from '../../components/common/Container';
import { Select, Button } from 'antd';
import paths from '../../utils/paths';
import MeshSelect from '../../components/common/MeshSelect/MeshSelect';
import { Link, useRouteMatch } from 'react-router-dom';

const { Option } = Select;

export default function WhatIsYourIndustryPage() {
  let { path } = useRouteMatch();
  const [route, setRoute] = useState('/');

  useEffect(() => {
    if (path.indexOf(paths.consultantRegistration) !== -1) {
      setRoute(paths.consultantRegStep2);
    } else if (path.indexOf(paths.businessRegistration) !== -1) {
      setRoute(paths.businessRegStep2);
    }
  }, [path]);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div className="what-is-industry-page">
      <SubHeader title="What is your Industry?" />
      <Container>
        <div className="first-step-container">
          <div className="step-box">
            <div className="step-box__step-1"></div>
            <div className="step-box__line"></div>
            <div className="step-box__step-2"></div>
          </div>
          <MeshSelect
            mode="multiple"
            placeholder="Industry"
            defaultValue="lucy"
            onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">Dima</Option>
          </MeshSelect>
          <Button type="primary" className="first-step-container__button">
            <Link to={route}>Next Step</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
