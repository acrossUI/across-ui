import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FabricContextProvider } from './hooks/fabricContext';
import { AuthProvider } from './hooks/auth';
import Routes from './routes';

import dark from './pages/themes/dark';
import GlobalStyle from './commons/styles/global';

import './commons/styles/darkTheme.less';

const App: React.FC = () => (
  <AuthProvider>
    <FabricContextProvider>
      <ThemeProvider theme={dark}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </FabricContextProvider>
  </AuthProvider>
);

export default App;
