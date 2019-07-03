import React from 'react';

import data from './data.json'

// css imports
import 'normalize.css';
import { ThemeProvider } from 'react-jss';

//component imports
import NavBar from './components/navbar';
import Status from './components/status';
import Brand from './components/brand';
import Info from './components/info';
import Contacts from './components/contacts';
import Graph from './components/graph';

const theme = {
  colorPrimary: '#607d8b',
  colorSecondary: 'grey',
  textPrimary: 'white',
  textSecondary: 'grey',
  textContent: 'grey',
  paddingSM: 10,
  paddingMD: 25,
  marginX: '0px 20px 0px 20px',
  marginY: '20px 0px 20px 0px',
  actionButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10
  },
  content: {
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
      <div style={theme.content}>
        <Status/>
        <Brand name={data[0].name} />
        <hr/>
        <Info content={data[0].description}/>
        <Contacts contacts={data[0].contacts}/>
        <Graph data={data[0].name}/>
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
