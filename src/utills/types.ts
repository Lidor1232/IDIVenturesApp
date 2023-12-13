export interface IAction {
  type: string;
  payload: any;
}

export interface ICity {
  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  regionWdId: string;
  latitude: number;
  longitude: number;
  population: number;
  distance: number;
  placeType: string;
}

export interface ICountry {
  code: string;
  name: string;
  wikiDataId: string;
}
