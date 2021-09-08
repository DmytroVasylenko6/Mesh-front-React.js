import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Input, Button, Checkbox, Row, Col, Select } from 'antd';
import MeshSelect from "../common/MeshSelect/MeshSelect";
// import registerSchema from '../../utils/validation-schemas/RegisterSchema';
const {Option} = Select;

export default function BillingForm({ handleSubmit }) {
  return (
    <Formik
      initialValues={{
        cardNumber: '',
        cardName: '',
        month: '',
        year: '',
        cvv: '',
        country: '',
        city: '',
        postalCode: '',
      }}
      //   validationSchema={registerSchema}
      onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, errors, touched, values }) => (
        <Form className="billing-form">
          <Row gutter={[50, 20]}>
            <Col span={24}>
              <h2 className="billing-form__title">Account</h2>
            </Col>
            <Col span={24}>
              <div className="billing-form__item">
                <Input
                  type="number"
                  name="cardNumber"
                  id="cardNumber"
                  //   data-error={errors.name && touched.name ? true : false}
                  placeholder="Card number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="billing-form__input"
                />
                <span className="billing-form__error">
                  <ErrorMessage name="cardNumber" />
                </span>
              </div>
            </Col>

            <Col span={24}>
              <Row gutter={[50, 20]}>
                <Col span={24} sm={{span: 12}}>
                  <div className="billing-form__item">
                    <Input
                      type="text"
                      name="cardName"
                      id="cardName"
                      //   data-error={errors.name && touched.name ? true : false}
                      placeholder="Name on Card"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="billing-form__input"
                    />
                    <span className="billing-form__error">
                      <ErrorMessage name="cardName" />
                    </span>
                  </div>
                </Col>
                <Col span={24} sm={{span: 12}}>
                  <Row gutter={[30, 20]}>
                    <Col span={12}>
                      <div className="billing-form__item">
                        <Input
                          type="number"
                          name="month"
                          id="month"
                          //   data-error={errors.name && touched.name ? true : false}
                          placeholder="Month"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="billing-form__input"
                        />
                        <span className="billing-form__error">
                          <ErrorMessage name="month" />
                        </span>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="billing-form__item">
                        <Input
                          type="number"
                          name="year"
                          id="year"
                          //   data-error={errors.name && touched.name ? true : false}
                          placeholder="Year"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="billing-form__input"
                        />
                        <span className="billing-form__error">
                          <ErrorMessage name="year" />
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span={24} sm={{span: 12}}>
                  <div className="billing-form__item">
                    <Input
                      type="number"
                      name="cvv"
                      id="cvv"
                      //   data-error={errors.name && touched.name ? true : false}
                      placeholder="CVV"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="billing-form__input"
                    />
                    <span className="billing-form__error">
                      <ErrorMessage name="cvv" />
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <span className="billing-form__line"></span>
          <Row gutter={[50, 20]}>
            <Col span={24} sm={{span: 12}}>
              <div className="billing-form__item">
                <MeshSelect
                  name="country"
                  defaultValue="Country 1"
                  placeholder="Country"
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  <Option value="Country 1">Country 1</Option>
                  <Option value="Country 2">Country 2</Option>
                <Option value="Country 3">Country 3</Option>
              </MeshSelect>
                <span className="billing-form__error">
                  <ErrorMessage name="country" />
                </span>
              </div>
            </Col>
            <Col span={24} sm={{span: 12}}>
              <div className="billing-form__item">
                <MeshSelect
                  name="city"
                  defaultValue="City 1"
                  placeholder="City"
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  <Option value="City 1">City 1</Option>
                  <Option value="City 2">City 2</Option>
                  <Option value="City 3">City 3</Option>
                </MeshSelect>
                <span className="billing-form__error">
                  <ErrorMessage name="city" />
                </span>
              </div>
            </Col>
            <Col span={24} sm={{span: 12}}>
              <div className="billing-form__item">
                <Input
                  type="number"
                  name="postalCode"
                  id="postalCode"
                  //   data-error={errors.name && touched.name ? true : false}
                  placeholder="Post Code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="billing-form__input"
                />
                <span className="billing-form__error">
                  <ErrorMessage name="postalCode" />
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="billing-form__checkbox-container">
              <Checkbox
                onChange={handleChange}
                className="billing-form__checkbox"
              />
              <p className="billing-form__checkbox-description">
                I understand that this is a recurring subscription. I will be
                charged automatically on a recurring basis unless i cancel
              </p>
              <Button
                type="primary"
                htmlType="submit"
                className="billing-form__button">
                <p className="button-text button-text--left">Today Charge 0$</p>
                <p className="button-text button-text--right">
                  Then - after one month trial total of 10$ per month
                </p>
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
