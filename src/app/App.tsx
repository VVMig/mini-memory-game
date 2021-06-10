import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { RoutesEnum } from './RoutesEnum';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route path={RoutesEnum.Home}></Route>
    </Switch>
  );
};

export default App;
