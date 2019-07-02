import React from 'react';
import 'normalize.css';

import { ThemeProvider } from 'react-jss';
import NavBar from './components/navbar';
import Brand from './components/brand';
import Status from './components/status'

const theme = {
  colorPrimary: 'blue',
  colorSecondary: 'grey',
  textPrimary: 'white',
  textSecondary: 'grey',
  textContent: 'grey',
  actionButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10
  },
  container: {
    width: '95%',
    margin: 'auto',
    marginTop: 70
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <NavBar num='2'/>
      <div style={theme.container}>
        <Status/>
        <Brand name='apple'/>
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
