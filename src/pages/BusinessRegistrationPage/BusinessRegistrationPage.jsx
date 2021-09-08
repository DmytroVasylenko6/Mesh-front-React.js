import React from 'react';
import SubHeader from '../../components/SubHeader';
import Container from '../../components/common/Container';
import RegistrationForm from '../../components/RegistrationForm';

export default function BusinessRegistrationPage() {
  const handleSubmit = formProps => {
    const {
      name,
      industry,
      company,
      email,
      phone,
      country,
      password,
      city,
      aboutText,
      website,
      linkedin,
      facebook,
      instagram,
      url,
    } = formProps;
    alert(`
      Name: ${name}
      Industry: ${industry}
      Company: ${company}
      Email:  ${email}
      Phone:  ${phone}
      Country:  ${country}
      Password:  ${password}
      City: ${city}
      About: ${aboutText}
      Website:  ${website}
      Linkedin:   ${linkedin}
      Facebook:  ${facebook}
      Instagram: ${instagram}
      URL: ${url}
  `);
  };
  return (
    <div className="register-page">
      <SubHeader title="Businesses Registration" />
      <Container>
        <div className="register-page__form-container">
          <RegistrationForm handleSubmit={handleSubmit} />
        </div>
      </Container>
    </div>
  );
}
