import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import paths from '../../utils/paths';
import loginSchema from '../../utils/validation-schemas/LoginSchema';

export default function LoginForm() {
  const handleSubmit = formProps => {
    const { email, password } = formProps;
    alert(`
    Email: ${email}
    Password: ${password}`);
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, errors, touched }) => (
        <Form className="login-form">
          <div className="login-form__item">
            <Input
              type="email"
              name="email"
              id="email"
              data-error={errors.email && touched.email ? true : false}
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              className="login-form__input"
            />
            <span className="login-form__error">
              <ErrorMessage name="email" />
            </span>
          </div>
          <div className="login-form__item">
            <Input
              type="password"
              name="password"
              id="password"
              data-error={errors.password && touched.password ? true : false}
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              className="login-form__input"
            />
            <span className="login-form__error">
              <ErrorMessage name="password" />
            </span>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form__button">
            Log In
          </Button>
          <Link to={paths.forgotPassword} className="login-form__link">
            Forgot password?
          </Link>
        </Form>
      )}
    </Formik>
  );
}
