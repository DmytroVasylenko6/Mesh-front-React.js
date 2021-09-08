import React, { useEffect, useState } from 'react';
// import { Form, Formik, ErrorMessage } from 'formik';
import { Input, Button, Row, Col, Select, Form } from 'antd';
import paths from '../../utils/paths';
import { useLocation } from 'react-router';
// import registerSchema from '../../utils/validation-schemas/RegisterSchema';
import MeshSelect from '../common/MeshSelect/MeshSelect';
const { Option } = Select;

export default function RegistrationForm({ handleSubmit }) {
  let location = useLocation();
  const [form] = Form.useForm();
  const [isBusinessPage, setIsBusinessPage] = useState();

  useEffect(() => {
    if (location.pathname.indexOf(paths.businessRegistration) !== -1) {
      setIsBusinessPage(true);
    } else {
      setIsBusinessPage(false);
    }
  }, [location]);

  return (
    <Form
      className="register-form"
      form={form}
      name="register"
      onFinish={handleSubmit}
      initialValues={{
        name: '',
        industry: 'Health care',
        company: '',
        email: '',
        phone: '',
        country: 'Coutnry 1',
        password: '',
        city: 'City 1',
        aboutText: '',
        website: '',
        linkedin: '',
        facebook: '',
        instagram: '',
        URL: '',
        expertise: 'Marketing',
      }}
      scrollToFirstError>
      <Row gutter={[50, 20]}>
        <Col span={24} order={0}>
          <h2 className="register-form__description">Info</h2>
        </Col>
        <Col span={24} order={1} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="name"
            id="name"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Required field!',
              },
            ]}>
            <Input
              type="text"
              placeholder="Name"
              className="register-form__input"
            />
          </Form.Item>
        </Col>
        <Col span={24} order={6} sm={{ span: 12, order: 0 }}>
          {isBusinessPage ? (
            <Form.Item
              className="register-form__item"
              name="industry"
              id="industry"
              rules={[
                {
                  type: 'string',
                  required: true,
                  message: 'Required field!',
                },
              ]}>
              <MeshSelect
                placeholder="Expertise"
                items={['Health care', 'Finance', 'Legal']}>
                <Option value="Marketing">Marketing</Option>
                <Option value="Business support">Business support</Option>
                <Option value="Other">Other</Option>
              </MeshSelect>
            </Form.Item>
          ) : (
            <Form.Item
              className="register-form__item"
              name="expertise"
              id="expertise"
              rules={[
                {
                  type: 'string',
                  required: true,
                  message: 'Required field!',
                },
              ]}>
              <MeshSelect
                placeholder="Expertise"
                items={['Marketing', 'Business support']}>
                <Option value="Marketing">Marketing</Option>
                <Option value="Business support">Business support</Option>
                <Option value="Other">Other</Option>
              </MeshSelect>
            </Form.Item>
          )}
        </Col>
        <Col span={24} order={2} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="company"
            id="company"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Required field!',
              },
            ]}>
            <Input
              type="text"
              placeholder="Company"
              className="register-form__input"
            />
          </Form.Item>
        </Col>
        <Col span={24} order={4} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="email"
            id="email"
            rules={[
              {
                required: true,
                message: 'Required field!',
              },
              {
                type: 'email',
                message: 'Invalid Email!',
              },
            ]}>
            <Input
              type="email"
              placeholder="Email"
              className="register-form__input"
            />
          </Form.Item>
        </Col>
        <Col span={24} order={3} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="phone"
            id="phone"
            rules={[
              {
                required: true,
                message: 'Required field!',
              },
              {
                pattern:
                  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                message: 'Invalid Phone!',
              },
            ]}>
            <Input
              type="tel"
              placeholder="Phone"
              className="register-form__input"
            />
          </Form.Item>
        </Col>
        <Col span={24} order={7} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="country"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Required field!',
              },
            ]}>
            <MeshSelect placeholder="Country">
              <Option value="Country 1">Country 1</Option>
              <Option value="Country 2">Country 2</Option>
              <Option value="Country 3">Country 3</Option>
            </MeshSelect>
          </Form.Item>
        </Col>
        <Col span={24} order={9} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="password"
            id="password"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Required field!',
              },
              {
                min: 6,
                message: 'At least 6 characters',
              },
            ]}>
            <Input
              type="password"
              placeholder="Password"
              className="register-form__input"
            />
          </Form.Item>
        </Col>
        <Col span={24} order={8} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="city"
            id="city"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Required field!',
              },
            ]}>
            <MeshSelect name="city" placeholder="City">
              <Option value="City 1">City 1</Option>
              <Option value="City 2">City 2</Option>
              <Option value="City 3">City 3</Option>
            </MeshSelect>
          </Form.Item>
        </Col>

        <Col span={24} order={5} sm={{ order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="aboutText"
            id="aboutText"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Required field!',
              },
              {
                max: 250,
                message: 'You have exceeded the word limit!',
              },
            ]}>
            <Input
              type="text"
              placeholder="250 words about yourself"
              className="register-form__input"
            />
          </Form.Item>
        </Col>
        <Col span={24} order={10} sm={{ order: 0 }}>
          <h2 className="register-form__description">Your Links</h2>
        </Col>
        <Col span={24} order={11} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="website"
            id="website"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Required field!',
              },
              {
                type: 'url',
                message: 'Invalid URL!',
              },
            ]}>
            <Input
              type="url"
              placeholder="Website"
              className="register-form__input"
            />
          </Form.Item>
        </Col>
        <Col span={24} order={13} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="linkedin"
            id="linkedin"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Required field!',
              },
              {
                type: 'url',
                message: 'Invalid URL!',
              },
            ]}>
            <Input
              type="url"
              placeholder="Linkedin"
              className="register-form__input"
            />
          </Form.Item>
        </Col>
        <Col span={24} order={12} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="facebook"
            id="facebook"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Required field!',
              },
              {
                type: 'url',
                message: 'Invalid URL!',
              },
            ]}>
            <Input
              type="url"
              placeholder="Facebook"
              className="register-form__input"
            />
          </Form.Item>
        </Col>
        <Col span={24} order={14} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="instagram"
            id="instagram"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Required field!',
              },
              {
                type: 'url',
                message: 'Invalid URL!',
              },
            ]}>
            <Input
              type="url"
              placeholder="Instagram"
              className="register-form__input"
            />
          </Form.Item>
        </Col>
        <Col span={24} order={15} sm={{ span: 12, order: 0 }}>
          <Form.Item
            className="register-form__item"
            name="url"
            id="url"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Required field!',
              },
              {
                type: 'url',
                message: 'Invalid URL!',
              },
            ]}>
            <Input
              type="url"
              placeholder="Another link"
              className="register-form__input"
            />
          </Form.Item>
        </Col>
        <Col span={24} order={16} sm={{ span: 12, order: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="register-form__button">
            See your personal page
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
