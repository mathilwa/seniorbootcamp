import moment from 'moment';
import { bevisliste, KJONN_MANN, BRUKERKODE_FORER } from './../../data/bevis.js';
import {
LEGG_TIL_BEVIS,
CLEAR_ALLE_BEVIS,
CLEAR_BEVIS,
SETT_BEVISNUMMER,
SETT_BRUKERKODE,
SETT_GYLDIGFRA,
SETT_GYLDIGTIL,
SETT_KOMMUNENUMMER,
SETT_FODSELSAAR,
SETT_NAVN,
SETT_KJONN,
} from './bevisAction.js';


const initialStateBevis = {
  navn: '',
  kommunenummer: '',
  bevisnummer: '',
  fodselsaar: '',
  kjonn: KJONN_MANN,
  brukerkode: BRUKERKODE_FORER,
  gyldigFra: '',
  gyldigTil: '',
};

const initialStateAlleBevis = bevisliste;

export const alleBevis = (state = initialStateAlleBevis, action) => {
  switch (action.type) {
    case LEGG_TIL_BEVIS:
      return state.concat(action.bevis);
    case CLEAR_ALLE_BEVIS:
      return initialStateAlleBevis;
    default:
      return state;
  }
};

export const bevis = (state = initialStateBevis, action) => {
  switch (action.type) {
    case CLEAR_BEVIS:
      return initialStateBevis;
    case SETT_NAVN:
      return Object.assign({}, state, { navn: action.navn });
    case SETT_BEVISNUMMER:
      return Object.assign({}, state, { bevisnummer: action.bevisnummer });
    case SETT_KOMMUNENUMMER:
      return Object.assign({}, state, { kommunenummer: action.kommunenummer });
    case SETT_FODSELSAAR:
      return Object.assign({}, state, { fodselsaar: action.fodselsaar });
    case SETT_KJONN:
      return Object.assign({}, state, { kjonn: action.kjonn });
    case SETT_GYLDIGFRA:
      return Object.assign({}, state, { gyldigFra: action.gyldigFra });
    case SETT_GYLDIGTIL:
      return Object.assign({}, state, { gyldigTil: action.gyldigTil });
    case SETT_BRUKERKODE:
      return Object.assign({}, state, { brukerKode: action.brukerKode });
    default:
      return state;
  }
};