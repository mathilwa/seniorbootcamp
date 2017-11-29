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
} from './bevisAction.js';


const initialStateBevis = {
  navn: '',
  kommunenummer: '',
  bevisnummer: '',
  fodselsaar: '',
  kjonn: KJONN_MANN,
  brukerkode: BRUKERKODE_FORER,
  gyldigFra: moment(),
  gyldigTil: moment().add('day', 1),
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
    case SETT_BEVISNUMMER:
      return state.push({ bevisnummer: action.bevisnummer });
    case SETT_KOMMUNENUMMER:
      return state.push({ kommunenummer: action.kommunenummer });
    case SETT_FODSELSAAR:
      return state.push({ fodselsaar: action.fodselsaar });
    case SETT_GYLDIGFRA:
      return state.push({ gyldigFra: action.gyldigFra });
    case SETT_GYLDIGTIL:
      return state.push({ gyldigTil: action.gyldigTil });
    case SETT_BRUKERKODE:
      return state.push({ brukerKode: action.brukerKode });
    default:
      return state;
  }
};