import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Auth } from './auth';
import { Container } from './layout';
import { RoutesEnum } from './RoutesEnum';
import { theme } from './theme';

export const App: React.FC = () => {
  return (
    <Switch>
      <ThemeProvider theme={theme}>
        <Container>
          <Route path={RoutesEnum.Home}>
            <Auth />
          </Route>
        </Container>
      </ThemeProvider>
    </Switch>
  );
};

export default App;
