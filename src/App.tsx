import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import Routes from './routes';

import store from './store';

import dark from './containers/themes/dark';
import GlobalStyle from './commons/styles/global';

const App: React.FC = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
