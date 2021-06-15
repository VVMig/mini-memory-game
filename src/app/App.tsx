import React from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ThemeProvider } from 'styled-components';

import { Auth } from './auth';
import { Game } from './game/Game';
import { Container, pageAnimationDuration } from './layout';
import { RoutesEnum } from './RoutesEnum';
import { Score } from './score/Score';
import { theme } from './theme';

export const App: React.FC = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={pageAnimationDuration}
            classNames="page"
          >
            <Switch location={location}>
              <Route path={RoutesEnum.Home} exact component={Auth} />
              <Route path={RoutesEnum.Game} component={Game} />
              <Route path={RoutesEnum.Score} component={Score} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Container>
    </ThemeProvider>
  );
};

export default App;
