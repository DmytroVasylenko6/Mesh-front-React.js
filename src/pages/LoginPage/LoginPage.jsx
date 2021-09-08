import React from 'react';
import SubHeader from '../../components/SubHeader';
import Container from '../../components/common/Container';
import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    <div className="login-page">
      <SubHeader title="Log In" />
      <Container>
        <div className="login-page__form-container">
        <LoginForm />
        </div>
      </Container>
    </div>
  );
}
