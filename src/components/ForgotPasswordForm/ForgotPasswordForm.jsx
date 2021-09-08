import React from 'react';
import { Form, Input, Button } from 'antd';
import { useState } from 'react';

export default function ForgotPasswordForm() {
  const [formFinished, setFormFinished] = useState(false);

  const onFinish = values => {
    console.log('Success:', values);
    setFormFinished(true);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className="forgot-password-form"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        email: '',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      {formFinished && (
        <Form.Item wrapperCol={24}>
          <span style={{display: 'block', whiteSpace: 'nowrap', textAlign: 'center', color: '#52c41a'}}>Check your email for temporary password</span>
        </Form.Item>
      )}
      <Form.Item
        className="forgot-password-form__item"
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
        <Input placeholder="Email" className="forgot-password-form__input" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 24,
        }}>
        <Button
          type="primary"
          htmlType="submit"
          className="forgot-password-form__button">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}
