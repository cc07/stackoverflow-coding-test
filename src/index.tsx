import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import App from './App';

import { store } from './redux/store';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
