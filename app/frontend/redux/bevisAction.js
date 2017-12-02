export const LEGG_TIL_BEVIS = 'LEGG_TIL_BEVIS';
export const CLEAR_BEVIS = 'CLEAR_BEVIS';
export const CLEAR_ALLE_BEVIS = 'CLEAR_ALLE_BEVIS';
export const SETT_BEVISNUMMER = 'SETT_BEVISNUMMER';
export const SETT_FODSELSAAR = 'SETT_FODSELSAAR';
export const SETT_KOMMUNENUMMER = 'SETT_KOMMUNENUMMER';
export const SETT_GYLDIGFRA = 'SETT_GYLDIGFRA';
export const SETT_GYLDIGTIL = 'SETT_GYLDIGTIL';
export const SETT_BRUKERKODE = 'SETT_BRUKERKODE';
export const SETT_BEVISTYPE = 'SETT_BEVISTYPE';
export const SETT_NAVN = 'SETT_NAVN';
export const SETT_KJONN = 'SETT_KJONN';

export function leggTilBevis(bevis) {
  return {
    type: LEGG_TIL_BEVIS,
    bevis,
  };
}

export function clearAlleBevis() {
  return {
    type: CLEAR_ALLE_BEVIS,
  };
}

export function clearBevis() {
  return {
    type: CLEAR_BEVIS,
  };
}

export function settNavn(navn) {
  return {
    type: SETT_NAVN,
    navn,
  };
}

export function settBevisnummer(bevisnummer) {
  return {
    type: SETT_BEVISNUMMER,
    bevisnummer,
  };
}

export function settKommunenummer(kommunenummer) {
  return {
    type: SETT_KOMMUNENUMMER,
    kommunenummer,
  };
}

export function settGyldigFra(gyldigFra) {
  return {
    type: SETT_GYLDIGFRA,
    gyldigFra,
  };
}

export function settGyldigTil(gyldigTil) {
  return {
    type: SETT_GYLDIGTIL,
    gyldigTil,
  };
}

export function settFodselsaar(fodselsaar) {
  return {
    type: SETT_FODSELSAAR,
    fodselsaar,
  };
}

export function settBrukerkode(brukerKode) {
  return {
    type: SETT_BRUKERKODE,
    brukerKode,
  };
}

export function settKjonn(kjonn) {
  return {
    type: SETT_KJONN,
    kjonn,
  };
}