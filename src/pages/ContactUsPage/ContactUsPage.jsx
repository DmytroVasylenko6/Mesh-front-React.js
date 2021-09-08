import React from 'react';
import SubHeader from '../../components/SubHeader';
import Container from '../../components/common/Container';
import ContactForm from '../../components/ContactForm';

function ContactUsPage() {
  return (
    <div className="contact-us">
      <SubHeader title="Contact Us" />
      <Container>
        <div className="contact-us__form-container">
          <ContactForm />
        </div>
      </Container>
    </div>
  )
}

export default ContactUsPage
