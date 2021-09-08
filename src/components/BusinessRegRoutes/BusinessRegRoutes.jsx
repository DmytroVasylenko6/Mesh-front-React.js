import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
// import BusinessRegistrationPage from '../../pages/BusinessRegistrationPage';
// import WhatIsYourIndustryPage from '../../pages/WhatIsYourIndustryPage';
// import AreYouLookingForPartnerPage from '../../pages/AreYouLookingForPartnerPage';
// import BillingPage from '../../pages/BillingPage';
import {
  BusinessRegistrationPage,
  WhatIsYourIndustryPage,
  AreYouLookingForPartnerPage,
  BillingPage,
} from '../../utils/lazyPages';
import paths from '../../utils/paths';

export default function BusinessRegRoutes() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path + paths.step1}>
        <WhatIsYourIndustryPage />
      </Route>

      <Route path={path + paths.step2}>
        <AreYouLookingForPartnerPage />
      </Route>

      <Route path={path + paths.step3}>
        <BusinessRegistrationPage />
      </Route>

      <Route path={path + paths.step4}>
        <BillingPage />
      </Route>

      <Route path={path}>
        <Redirect to={path + paths.step1} />
      </Route>
    </Switch>
  );
}
