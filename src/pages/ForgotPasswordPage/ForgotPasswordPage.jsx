import React from 'react';
import SubHeader from '../../components/SubHeader';
import Container from '../../components/common/Container';
import ForgotPasswordForm from '../../components/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <div className="forgot-password">
      <SubHeader title="Forgot Password?" />
      <Container>
        <div className="forgot-password__form-container">
          <ForgotPasswordForm />
        </div>
      </Container>
    </div>
  );
}
