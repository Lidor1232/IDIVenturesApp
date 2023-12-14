import {ICoordinates} from '../types';

export function onGetCoordinatePrefix({
  coordinate,
}: {
  coordinate: number;
}): '+' | '-' {
  return coordinate > 0 ? '+' : '-';
}

export function onFormatCoordinateToISO6709({
  coordinate,
}: {
  coordinate: number;
}): string {
  const coordinatePrefix = onGetCoordinatePrefix({
    coordinate,
  });
  const formattedCoordinate = Math.abs(coordinate).toFixed(4);
  return `${coordinatePrefix}${formattedCoordinate}`;
}

export interface IGetFormatCoordinatesToISO6709Response {
  latitude: string;
  longitude: string;
}

export function onGetFormatCoordinatesToISO6709({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): IGetFormatCoordinatesToISO6709Response {
  const formattedLat = onFormatCoordinateToISO6709({
    coordinate: latitude,
  });
  const formattedLng = onFormatCoordinateToISO6709({
    coordinate: longitude,
  });
  return {
    latitude: formattedLat,
    longitude: formattedLng,
  };
}

export function onGetLocationAPIQueryByCoordinates({
  coordinates,
}: {
  coordinates: ICoordinates;
}): string {
  const formattedCoordinates = onGetFormatCoordinatesToISO6709({
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  });
  return `${formattedCoordinates.latitude}${formattedCoordinates.longitude}`;
}
