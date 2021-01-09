import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Header from 'containers/header';
import './index.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Noto Sans KR',
  },
});

export default function App() {
  return <h1>Hello 안녕</h1>;
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Header />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
