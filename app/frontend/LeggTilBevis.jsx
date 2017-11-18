import React from 'react';
import PropTypes from 'prop-types';

const LeggTilBevis = ({ bevis, oppdater, lagreBevis }) => (
  <div>
    <h2>Legg til nytt bevis</h2>
    <form onSubmit={lagreBevis}>
      <label htmlFor="navn-input">Navn</label>
      <input type="text" id="navn-input" value={bevis.navn} onChange={(event) => oppdater(event, 'navn')}/>
      <label htmlFor="kommunenummer-input">Kommunenummer</label>
      <input type="text" id="kommunenummer-input" value={bevis.kommunenummer} onChange={(event) => oppdater(event, 'kommunenummer')}/>
      <label htmlFor="bevis-input">Bevisnummer</label>
      <input type="text" id="bevis-input" value={bevis.bevisnummer} onChange={(event) => oppdater(event, 'bevisnummer')}/>
      <label htmlFor="gyldigFra-input">Gyldig fra</label>
      <input type="text" id="gyldigFra-input" value={bevis.gyldigFra} onChange={(event) => oppdater(event, 'gyldigFra')}/>
      <label htmlFor="gyldigTil-input">Gyldig til</label>
      <input type="text" id="gyldigTil-input" value={bevis.gyldigTil} onChange={(event) => oppdater(event, 'gyldigTil')}/>
      <button>Lagre</button>
    </form>
  </div>
);

LeggTilBevis.propTypes = {
  bevis: PropTypes.object.isRequired,
  lagreBevis: PropTypes.func.isRequired,
  oppdater: PropTypes.func.isRequired,
};

export default LeggTilBevis;
