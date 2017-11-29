import React from 'react';
import 'babel-polyfill';
import { polyfill } from 'es6-promise';
polyfill();

import { connect } from 'react-redux';
import BevisOversikt from './BevisOversikt.jsx';
import LeggTilBevis from './LeggTilBevis.jsx';
import { leggTilBevis } from './redux/bevisAction.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.oppdater = this.oppdater.bind(this);
    this.lagreBevis = this.lagreBevis.bind(this);
    this.state = {
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
    this.props.dispatch(leggTilBevis(this.state.bevis));
  }

  render() {
    return (
      <div>
        <h1>Registeret</h1>
        <BevisOversikt bevisliste={this.props.alleBevis} />
        <LeggTilBevis bevis={this.state.bevis} oppdater={this.oppdater} lagreBevis={this.lagreBevis} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    alleBevis: state.alleBevis,
  };
};

export default connect(mapStateToProps)(App);
