import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import dark from './containers/themes/dark';
import GlobalStyle from './commons/styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
