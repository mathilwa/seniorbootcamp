import React from 'react';
import 'babel-polyfill';
import { polyfill } from 'es6-promise';
polyfill();

import BevisOversikt from './BevisOversikt.jsx';

const App = () => {
  return (
      <div>
        <h1>Registeret</h1>
        <BevisOversikt />
      </div>
  );
};

export default App;
