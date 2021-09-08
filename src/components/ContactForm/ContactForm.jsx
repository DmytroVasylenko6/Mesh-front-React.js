import React from 'react';
import { Form, Input, Button } from 'antd';
// import { useState } from 'react';

export default function ContactForm() {
  // const [formFinished, setFormFinished] = useState(false);

  // const onFinish = values => {
  //   console.log('Success:', values);
  //   setFormFinished(true);
  // };

  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <Form
      className="contact-form"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        name: '',
        email: '',
        message: ''
      }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off">
      <Form.Item
        className="contact-form__item"
        name="name"
        wrapperCol={{
          span: 24,
        }}>
        <Input placeholder="name" className="contact-form__input" />
      </Form.Item>

      <Form.Item
        className="contact-form__item"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
        wrapperCol={{
          span: 24,
        }}>
        <Input placeholder="Email" className="contact-form__input" />
      </Form.Item>

      <Form.Item
        className="contact-form__item"
        name="message"
        rules={[
          {
            required: true,
            message: 'Please enter your message!',
          },
        ]}
        wrapperCol={{
          span: 24,
        }}>
        <Input.TextArea placeholder="Message" className="contact-form__textarea" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 24,
        }}>
        <Button
          type="primary"
          htmlType="submit"
          className="contact-form__button">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}
