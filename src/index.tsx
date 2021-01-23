import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Header from 'containers/web/header';
import Main from 'containers/web/contents';
import './index.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Noto Sans KR',
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <Header />
      <Main />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
