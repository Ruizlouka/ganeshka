import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Radiogroupe } from './components/molecule/Radiogroupe/Radiogroupe';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
function App() {
  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">
      <Radiogroupe/>
    </div>
    </ThemeProvider>
  );
}

export default App;
