import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Auth } from './auth';
import { Game } from './game/Game';
import { Container } from './layout';
import { RoutesEnum } from './RoutesEnum';
import { theme } from './theme';

export const App: React.FC = () => {
  return (
    <Switch>
      <ThemeProvider theme={theme}>
        <Container>
          <Route path={RoutesEnum.Home} exact>
            <Auth />
          </Route>
          <Route path={RoutesEnum.Game}>
            <Game />
          </Route>
        </Container>
      </ThemeProvider>
    </Switch>
  );
};

export default App;
