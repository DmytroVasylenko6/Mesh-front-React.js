import { lazy } from 'react';

export const HomePage = lazy(() => {
  return Promise.all([
    import('../pages/HomePage' /* webpackChunkName: "home-page" */),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const LoginPage = lazy(() => {
  return Promise.all([
    import('../pages/LoginPage' /* webpackChunkName: "login-page" */),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const ForgotPasswordPage = lazy(() => {
  return Promise.all([
    import(
      '../pages/ForgotPasswordPage' /* webpackChunkName: "forgot-password-page" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const BusinessRegistrationPage = lazy(() => {
  return Promise.all([
    import(
      '../pages/BusinessRegistrationPage' /* webpackChunkName: "business-reg-page" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const BusinessProfilePage = lazy(() => {
  return Promise.all([
    import(
      '../pages/BusinessProfilePage' /* webpackChunkName: "business-profile-page" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const BusinessProfileSettings = lazy(() => {
  return Promise.all([
    import(
      '../pages/BusinessProfileSettings' /* webpackChunkName: "business-profile-settings" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const PartnerLocatorPage = lazy(() => {
  return Promise.all([
    import(
      '../pages/PartnerLocatorPage' /* webpackChunkName: "partner-locator-page" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const ConsultantRegistrationPage = lazy(() => {
  return Promise.all([
    import(
      '../pages/ConsultantRegistrationPage' /* webpackChunkName: "consultant-reg-page" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const ConsultantProfilePage = lazy(() => {
  return Promise.all([
    import(
      '../pages/ConsultantProfilePage' /* webpackChunkName: "consultant-profile-page" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const ConsultantProfileSettings = lazy(() => {
  return Promise.all([
    import(
      '../pages/ConsultantProfileSettings' /* webpackChunkName: "consultant-profile-settings" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const ConsultantLocatorPage = lazy(() => {
  return Promise.all([
    import(
      '../pages/ConsultantLocatorPage' /* webpackChunkName: "consultant-locator-page" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const HowItWorksPage = lazy(() => {
  return Promise.all([
    import(
      '../pages/HowItWorksPage' /* webpackChunkName: "how-it-works-page" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const WhatIsYourIndustryPage = lazy(() => {
  return Promise.all([
    import(
      '../pages/WhatIsYourIndustryPage' /* webpackChunkName: "what-is-your-industry-page" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const AreYouLookingForPartnerPage = lazy(() => {
  return Promise.all([
    import(
      '../pages/AreYouLookingForPartnerPage' /* webpackChunkName: "are-you-loocking-for-partner-page" */
    ),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const BillingPage = lazy(() => {
  return Promise.all([
    import('../pages/BillingPage' /* webpackChunkName: "billing-page" */),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const TermsPage = lazy(() => {
  return Promise.all([
    import('../pages/TermsPage' /* webpackChunkName: "terms-page" */),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});

export const ContactUsPage = lazy(() => {
  return Promise.all([
    import('../pages/ContactUsPage' /* webpackChunkName: "contact-us-page" */),
    new Promise(resolve => setTimeout(resolve, 250)),
  ]).then(([moduleExports]) => moduleExports);
});
