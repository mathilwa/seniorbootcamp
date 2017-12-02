import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BevisOversikt from './BevisOversikt.jsx';
import LeggTilBevisKnapp from './LeggTilBevisKnapp.jsx';

class Hovedside extends React.Component {
  constructor(props) {
    super(props);
    this.oppdater = this.oppdater.bind(this);
    this.state = {
      bevis: {},
    };
  }

  oppdater(event, felt) {
    const feltverdi = event.target.value;
    const bevis = Object.assign({}, this.state.bevis, { [`${felt}`]: feltverdi } );
    this.setState({bevis: bevis});
  }

  render() {
    return (
      <div className="blokk">
        <h1>Registeret</h1>
        <LeggTilBevisKnapp history={this.props.history} />
        <BevisOversikt bevisliste={this.props.alleBevis} dispatch={this.props.dispatch} />
      </div>
    );
  }
};

Hovedside.propTypes = {
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    alleBevis: state.alleBevis,
    bevis: state.bevis,
  };
};

export default connect(mapStateToProps)(Hovedside);
