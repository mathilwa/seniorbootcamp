import React from 'react';
import 'babel-polyfill';
import { polyfill } from 'es6-promise';
polyfill();

import BevisOversikt from './BevisOversikt.jsx';
import LeggTilBevis from './LeggTilBevis.jsx';
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
    this.setState({bevisliste: bevisliste, bevis: {}});
  }

  render() {
    return (
        <div>
          <h1>Registeret</h1>
          <BevisOversikt bevisliste={this.state.bevisliste} />
          <LeggTilBevis bevis={this.state.bevis} oppdater={this.oppdater} lagreBevis={this.lagreBevis} />
        </div>
    );
  }
};

export default App;
