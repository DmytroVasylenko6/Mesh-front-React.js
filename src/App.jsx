import React, { Suspense } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Redirect, Route, useLocation } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/common/Loader';
import BusinessRegRoutes from './components/BusinessRegRoutes';
import ConsultantRegRoutes from './components/ConsultantRegRoutes';
import paths from './utils/paths';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import HowItWorksPage from './pages/HowItWorksPage';
// import BusinessProfilePage from './pages/BusinessProfilePage';
// import BusinessProfileSettings from './pages/BusinessProfileSettings';
// import PartnerLocatorPage from './pages/PartnerLocatorPage';
// import ConsultantProfilePage from './pages/ConsultantProfilePage';
// import ConsultantProfileSettings from './pages/ConsultantProfileSettings';
// import ConsultantLocatorPage from './pages/ConsultantLocatorPage';
// import TermsPage from './pages/TermsPage';
import {
  HomePage,
  LoginPage,
  ForgotPasswordPage,
  HowItWorksPage,
  BusinessProfilePage,
  BusinessProfileSettings,
  PartnerLocatorPage,
  ConsultantProfilePage,
  ConsultantProfileSettings,
  ConsultantLocatorPage,
  TermsPage,
  ContactUsPage
} from './utils/lazyPages';

export default function App() {
  let location = useLocation();

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <TransitionGroup component="main">
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              <Route exact path={paths.home}>
                <HomePage />
              </Route>
              <PublicRoute path={paths.login} restricted>
                <LoginPage />
              </PublicRoute>
              <PublicRoute path={paths.forgotPassword} restricted>
                <ForgotPasswordPage />
              </PublicRoute>
              <PublicRoute path={paths.businessRegistration} restricted>
                <BusinessRegRoutes />
              </PublicRoute>
              <PrivateRoute path={paths.businessProfile} restricted>
                <BusinessProfilePage />
              </PrivateRoute>
              <PrivateRoute path={paths.businessProfileSettings} restricted>
                <BusinessProfileSettings />
              </PrivateRoute>
              <PrivateRoute path={paths.partnerLocator} restricted>
                <PartnerLocatorPage />
              </PrivateRoute>
              <PublicRoute path={paths.consultantRegistration} restricted>
                <ConsultantRegRoutes />
              </PublicRoute>
              <PrivateRoute path={paths.consultantProfile} restricted>
                <ConsultantProfilePage />
              </PrivateRoute>
              <PrivateRoute path={paths.consultantProfileSettings} restricted>
                <ConsultantProfileSettings />
              </PrivateRoute>
              <PrivateRoute path={paths.consultantLocator} restricted>
                <ConsultantLocatorPage />
              </PrivateRoute>
              <Route path={paths.howItWorks}>
                <HowItWorksPage />
              </Route>
              <Route path={paths.terms}>
                <TermsPage />
              </Route>
              <Route path={paths.contacts}>
                <ContactUsPage />
              </Route>
              <Redirect to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
      <Footer />
    </>
  );
}
