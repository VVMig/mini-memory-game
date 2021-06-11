import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ThemeProvider } from 'styled-components';

import { Auth } from './auth';
import { Game } from './game/Game';
import { Container, pageAnimationDuration } from './layout';
import { RoutesEnum } from './RoutesEnum';
import { theme } from './theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={pageAnimationDuration}
                classNames="page"
              >
                <Switch location={location}>
                  <Route path={RoutesEnum.Home} exact>
                    <Auth />
                  </Route>
                  <Route path={RoutesEnum.Game}>
                    <Game />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
