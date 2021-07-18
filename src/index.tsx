import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createTheme } from '@material-ui/core';
import Header from 'containers/web/header';
import Main from 'containers/web/contents';
import customeTheme from 'config/theme';
import 'styles/index.scss';

const theme = createTheme({
  typography: {
    fontFamily: 'Spoqa Han Sans',
  },
  palette: {
    primary: {
      main: customeTheme.main,
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h3',
      },
    },
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
