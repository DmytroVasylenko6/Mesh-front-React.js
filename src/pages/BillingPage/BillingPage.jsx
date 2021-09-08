import React from 'react';
import SubHeader from '../../components/SubHeader';
import BillingForm from '../../components/BillingForm';
import Container from "../../components/common/Container";

export default function BillingPage() {
  return (
    <div className="billing-page">
      <SubHeader title="Billing" />

      <Container>
        <div className="billing-page__content">
            <p className="billing-page__title">Start 1 month Free trial</p>
            <BillingForm />
        </div>
      </Container>
    </div>
  );
}
