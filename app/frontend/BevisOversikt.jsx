import React from 'react';
import { bevis } from './../data/bevis.js';

const BevisOversikt = () => {
  return (
      <ul>
        {bevis.map(b => <li>{b.navn}, {b.bevisnummer}</li>)}
      </ul>
  );
};

export default BevisOversikt;
