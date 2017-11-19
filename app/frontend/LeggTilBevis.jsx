import React from 'react';
import PropTypes from 'prop-types';
import { KJONN_MANN, KJONN_KVINNE, BRUKERKODE_FORER, BRUKERKODE_PASSASJER } from './../data/bevis.js';

const LeggTilBevis = ({bevis, oppdater, lagreBevis}) => (
  <div className="blokk">
    <h2 className="blokk-heading">Legg til nytt bevis</h2>
    <form className="blokk-innhold" onSubmit={lagreBevis}>
      <div className="input-gruppe">
        <label htmlFor="navn">Navn</label>
        <input type="text" id="navn" value={bevis.navn} onChange={event => oppdater(event, 'navn')}/>
      </div>
      <div className="input-gruppe">
        <label htmlFor="kommunenummer">Kommunenummer</label>
        <input type="text" id="kommunenummer" value={bevis.kommunenummer} onChange={event => oppdater(event, 'kommunenummer')}/>
      </div>
      <div className="input-gruppe">
        <label htmlFor="bevisnummer">Bevisnummer</label>
        <input type="text" id="bevisnummer" value={bevis.bevisnummer} onChange={event => oppdater(event, 'bevisnummer')}/>
      </div>
      <div className="input-gruppe nedtrekksliste-container">
        <label htmlFor="kjonn">Kjønn</label>
        <select id="kjonn" className="nedtrekksliste" value={bevis.kjonn} onChange={event => oppdater(event, 'kjonn')}>
          <option value={KJONN_MANN}>{KJONN_MANN}</option>
          <option value={KJONN_KVINNE}>{KJONN_KVINNE}</option>
        </select>
      </div>
      <div className="input-gruppe nedtrekksliste-container">
        <label htmlFor="brukerkode">Brukerkode</label>
        <select id="brukerkode" className="nedtrekksliste" value={bevis.brukerkode} onChange={event => oppdater(event, 'brukerkode')}>
          <option value={BRUKERKODE_FORER}>{BRUKERKODE_FORER}</option>
          <option value={BRUKERKODE_PASSASJER}>{BRUKERKODE_PASSASJER}</option>
        </select>
      </div>
      <div className="input-gruppe">
        <label htmlFor="gyldigFra">Gyldig fra</label>
        <input type="text" id="gyldigFra" value={bevis.gyldigFra} onChange={event => oppdater(event, 'gyldigFra')}/>
      </div>
      <div className="input-gruppe">
        <label htmlFor="gyldigTil">Gyldig til</label>
        <input type="text" id="gyldigTil" value={bevis.gyldigTil} onChange={event => oppdater(event, 'gyldigTil')}/>
      </div>
      <button className="knapp">Lagre</button>
    </form>
  </div>
);

LeggTilBevis.propTypes = {
  bevis: PropTypes.object.isRequired,
  lagreBevis: PropTypes.func.isRequired,
  oppdater: PropTypes.func.isRequired,
};

export default LeggTilBevis;
