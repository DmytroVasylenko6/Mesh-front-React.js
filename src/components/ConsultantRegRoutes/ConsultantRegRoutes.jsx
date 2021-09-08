import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import ConsultantRegistrationPage from '../../pages/ConsultantRegistrationPage';
// import WhatIsYourIndustryPage from '../../pages/WhatIsYourIndustryPage';
// import AreYouLookingForPartnerPage from '../../pages/AreYouLookingForPartnerPage';
import {
  ConsultantRegistrationPage,
  // WhatIsYourIndustryPage,
  // AreYouLookingForPartnerPage,
} from '../../utils/lazyPages';
// import paths from '../../utils/paths';

export default function ConsultantRegRoutes() {
  let { path } = useRouteMatch();
  console.log(path);

  return (
    <Switch>
      <Route path={path}>
        <ConsultantRegistrationPage />
      </Route>
    </Switch>
  );
}
