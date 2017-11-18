import React from 'react';
import 'babel-polyfill';
import { polyfill } from 'es6-promise';
polyfill();

import BevisOversikt from './BevisOversikt.jsx';
import { bevis } from './../data/bevis.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.oppdater = this.oppdater.bind(this);
    this.lagreBevis = this.lagreBevis.bind(this);
    this.state = {
      bevisliste: bevis,
      bevis: {},
    };
  }

  oppdater(event, felt) {
    const feltverdi = event.target.value;
    const bevis = Object.assign({}, this.state.bevis, { [`${felt}`]: feltverdi } );
    this.setState({bevis: bevis});
  }

  lagreBevis(event) {
    event.preventDefault();
    const bevisliste = this.state.bevisliste;
    bevisliste.push(this.state.bevis);
    this.setState({bevisliste: bevisliste});
  }

  render() {
    return (
        <div>
          <h1>Registeret</h1>
          <BevisOversikt bevisliste={this.state.bevisliste} />
          <div>
            <h2>Legg til nytt bevis</h2>
            <form onSubmit={this.lagreBevis}>
              <label htmlFor="navn-input">Navn</label>
              <input type="text" id="navn-input" value={bevis.navn} onChange={(event) => this.oppdater(event, 'navn')}/>
              <label htmlFor="kommunenummer-input">Kommunenummer</label>
              <input type="text" id="kommunenummer-input" value={bevis.kommunenummer} onChange={(event) => this.oppdater(event, 'kommunenummer')}/>
              <label htmlFor="bevis-input">Bevisnummer</label>
              <input type="text" id="bevis-input" value={bevis.bevisnummer} onChange={(event) => this.oppdater(event, 'bevisnummer')}/>
              <label htmlFor="gyldigFra-input">Gyldig fra</label>
              <input type="text" id="gyldigFra-input" value={bevis.gyldigFra} onChange={(event) => this.oppdater(event, 'gyldigFra')}/>
              <label htmlFor="gyldigTil-input">Gyldig til</label>
              <input type="text" id="gyldigTil-input" value={bevis.gyldigTil} onChange={(event) => this.oppdater(event, 'gyldigTil')}/>
              <button>Lagre</button>
            </form>
          </div>
        </div>
    );
  }
};

export default App;
