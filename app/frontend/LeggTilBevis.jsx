import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KJONN_MANN, KJONN_KVINNE, BRUKERKODE_FORER, BRUKERKODE_PASSASJER } from './../data/bevis.js';
import { leggTilBevis, settNavn, settKommunenummer, settBevisnummer, settKjonn, settBrukerkode, settGyldigFra, settGyldigTil, settFodselsaar, clearBevis } from './redux/bevisAction.js';

class LeggTilBevis extends React.Component {
  lagreBevis(event) {
    event.preventDefault();
    this.props.dispatch(leggTilBevis(this.props.bevis));
    this.props.dispatch(clearBevis());
    this.props.history.push('/')
  }

  avbryt(event) {
    event.preventDefault();
    this.props.dispatch(clearBevis());
    this.props.history.push('/')
  }

  render() {
    const bevis = this.props.bevis;
    const dispatch = this.props.dispatch;
    return (
      <div className="blokk">
        <h1>Registeret</h1>
        <div className="blokk">
          <h2 className="blokk-heading">Legg til nytt bevis</h2>
          <form className="blokk-innhold" onSubmit={event => this.lagreBevis(event, bevis, dispatch)}>
            <div className="form-input">
              <div className="input-gruppe">
                <label htmlFor="navn">Navn</label>
                <input type="text" id="navn" value={bevis.navn} onChange={event => dispatch(settNavn(event.target.value))}/>
              </div>
              <h3>Serienummer</h3>
              <div className="serienummer input-gruppe">
                <div className="serienummer-input">
                  <label htmlFor="kommunenummer">Kommunenummer</label>
                  <input type="text" id="kommunenummer" value={bevis.kommunenummer} onChange={event => dispatch(settKommunenummer(event.target.value))}/>
                </div>
                <div className="serienummer-input">
                  <label htmlFor="bevisnummer">Bevisnummer</label>
                  <input type="text" id="bevisnummer" value={bevis.bevisnummer} onChange={event => dispatch(settBevisnummer(event.target.value))}/>
                </div>
                <div className="serienummer-input">
                  <label htmlFor="fodselsaar">Fødselsår</label>
                  <input className="input-liten" type="text" id="fodselsaar" value={bevis.fodselsaar} onChange={event => dispatch(settFodselsaar(event.target.value))}/>
                </div>
                <div className="serienummer-input nedtrekksliste-container">
                  <label htmlFor="kjonn">Kjønn</label>
                  <select id="kjonn" className="nedtrekksliste" value={bevis.kjonn} onChange={event => dispatch(settKjonn(event.target.value))}>
                    <option value={KJONN_MANN}>{KJONN_MANN}</option>
                    <option value={KJONN_KVINNE}>{KJONN_KVINNE}</option>
                  </select>
                </div>
                <div className="serienummer-input nedtrekksliste-container">
                  <label htmlFor="brukerkode">Brukerkode</label>
                  <select id="brukerkode" className="nedtrekksliste" value={bevis.brukerkode} onChange={event => dispatch(settBrukerkode(event.target.value))}>
                    <option value={BRUKERKODE_FORER}>{BRUKERKODE_FORER}</option>
                    <option value={BRUKERKODE_PASSASJER}>{BRUKERKODE_PASSASJER}</option>
                  </select>
                </div>
              </div>
              <div className="gyldighet input-gruppe">
                <div className="gyldighet-input">
                  <label htmlFor="gyldigFra">Gyldig fra</label>
                  <input type="text" id="gyldigFra" value={bevis.gyldigFra} onChange={event => dispatch(settGyldigFra(event.target.value))}/>
                </div>
                <div className="gyldighet-input">
                  <label htmlFor="gyldigTil">Gyldig til</label>
                  <input type="text" id="gyldigTil" value={bevis.gyldigTil} onChange={event => dispatch(settGyldigTil(event.target.value))}/>
                </div>
              </div>
            </div>
            <button className="knapp" type="submit">Lagre</button>
            <button className="knapp knapp-avbryt" type="reset" onClick={(event) => this.avbryt(event)}>Avbryt</button>
          </form>
        </div>
      </div>
    )
  }
};

LeggTilBevis.propTypes = {
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    bevis: state.bevis,
  };
};


export default connect(mapStateToProps)(LeggTilBevis);
