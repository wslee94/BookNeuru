import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import Header from 'containers/header';
import Main from 'containers/contents';
import './index.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Noto Sans KR',
  },
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Header />
    <Main />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
