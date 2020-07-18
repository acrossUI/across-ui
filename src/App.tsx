import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { FabricContextProvider } from './context/fabricContext';
import Routes from './routes';

import store from './store';

import dark from './pages/themes/dark';
import GlobalStyle from './commons/styles/global';

import './commons/styles/darkTheme.less';

const App: React.FC = () => (
  <FabricContextProvider>
    <ReduxProvider store={store}>
      <ThemeProvider theme={dark}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </ReduxProvider>
  </FabricContextProvider>
);

export default App;
