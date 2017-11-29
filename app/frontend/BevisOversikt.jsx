import React from 'react';
import PropTypes from 'prop-types';
import BevisDetaljer from './BevisDetaljer.jsx';

const BevisOversikt = ({ bevisliste }) => (
  <div className="blokk">
    <h2 className="blokk-heading">Bevisoversikt</h2>
    <ul className="bevisliste blokk-innhold">
      {bevisliste.map((bevis, index) => <BevisDetaljer key={index} bevis={bevis} />)}
    </ul>
  </div>
);

BevisOversikt.propTypes = {
  bevisliste: PropTypes.array.isRequired,
};

export default BevisOversikt;
