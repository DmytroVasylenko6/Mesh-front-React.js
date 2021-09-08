import React from 'react';

import { Input, Radio, Row, Col } from 'antd';

export default function RegistrationForm({ label, checkBoxValues }) {
  const checkBoxChange = e => {
    console.log(e.target.value);
  };
  const inputChange = e => {
    console.log(e.target.value);
  };
  return (
    <div className="search-form">
      <Row gutter={[50, 20]}>
        <Col span={24} className="search-form__form">
          <Row gutter={[50, 20]}>
            <Col span={24}>
              <Row gutter={[0, 20]}>
                <Col span={12}>
                  <p className="search-form__label">{label}</p>
                </Col>
                <Col span={12}>
                  <Radio.Group
                    className="radio-list"
                    buttonStyle="solid"
                    onChange={checkBoxChange}>
                    {checkBoxValues.map(value => {
                      return (
                        <Radio.Button
                          key={value}
                          className="radio-list__item"
                          value={value}>
                          {value}
                        </Radio.Button>
                      );
                    })}
                  </Radio.Group>
                </Col>
              </Row>
            </Col>
            <span className="search-form__line"></span>
            <Col span={24}>
              <Input
                type="search"
                name="search"
                id="search"
                onChange={inputChange}
                placeholder="Type"
                className="search-form__input"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
