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

// 추후에 userAgent에 따라 분기할 수 있도록 변경 필요
const isMobile = false;

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      {isMobile ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <>
          <Header />
          <Main />
        </>
      )}
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
