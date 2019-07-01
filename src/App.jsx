import React from 'react';
import logo from './logo.svg';
import 'normalize.css';

import { ThemeProvider } from 'react-jss';
import NavBar from './components/navbar';

const theme = {
  colorPrimary: 'green',
  container: {
    width: '80%',
    textAlign: 'right'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <NavBar />
      </>
    </ThemeProvider>
  );
}

export default App;
