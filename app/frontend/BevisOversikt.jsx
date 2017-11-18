import React from 'react';
import PropTypes from 'prop-types';

const BevisOversikt = ({bevisliste}) => {
  return (
    <div>
      <h2>Bevisoversikt</h2>
      <ul className="bevisliste">
        {bevisliste.map((bevis, index) => <li className="bevis" key={index}>{bevis.navn}, {bevis.bevisnummer}</li>)}
      </ul>
    </div>
  );
};

BevisOversikt.propTypes = {
  bevisliste: PropTypes.array.isRequired,
};

export default BevisOversikt;
