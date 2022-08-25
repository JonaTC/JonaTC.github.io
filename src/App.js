import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Componenteheader} from './componente-header';
import {Componentebody} from './componentebody';
import {Componentefooter} from './componentefooter';

function App() {
  return (
    <React.Fragment>
      <Componenteheader />
      <Componentebody />
      <Componentefooter />
    </React.Fragment>
  );
}

export default App;
