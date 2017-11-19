import React from 'react';
import PropTypes from 'prop-types';

const BevisDetaljer = ({bevis}) => (
  <li className="bevis">
    <div className="bevisdetaljer bevis-navn">{bevis.navn}</div>
    <div className="bevisdetaljer bevis-nummer">{bevis.kommunenummer} {bevis.bevisnummer} {bevis.fodselsaar} {bevis.kjonn} {bevis.brukerkode}</div>
    <div className="bevisdetaljer bevis-gyldig">Gyldighetsperiode: {bevis.gyldigFra} - {bevis.gyldigTil}</div>
  </li>
);

BevisDetaljer.propTypes = {
  bevis: PropTypes.object.isRequired,
};

export default BevisDetaljer;
