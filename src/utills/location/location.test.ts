import {
  onFormatCoordinateToISO6709,
  onGetCoordinatePrefix,
  onGetFormatCoordinatesToISO6709,
  onGetLocationAPIQueryByCoordinates,
} from './location';

test('onGetCoordinatePrefix', function () {
  expect(
    onGetCoordinatePrefix({
      coordinate: 1,
    }),
  ).toBe('+');
  expect(
    onGetCoordinatePrefix({
      coordinate: -1,
    }),
  ).toBe('-');
});

test('onFormatCoordinateToISO6709', function () {
  expect(
    onFormatCoordinateToISO6709({
      coordinate: 1,
    }),
  ).toBe('+1.0000');
  expect(
    onFormatCoordinateToISO6709({
      coordinate: -1,
    }),
  ).toBe('-1.0000');
});

test('onGetFormatCoordinatesToISO6709', function () {
  expect(
    onGetFormatCoordinatesToISO6709({
      latitude: 1,
      longitude: 1,
    }),
  ).toStrictEqual({
    latitude: '+1.0000',
    longitude: '+1.0000',
  });
  expect(
    onGetFormatCoordinatesToISO6709({
      latitude: 1,
      longitude: -1,
    }),
  ).toStrictEqual({
    latitude: '+1.0000',
    longitude: '-1.0000',
  });
  expect(
    onGetFormatCoordinatesToISO6709({
      latitude: -1,
      longitude: 1,
    }),
  ).toStrictEqual({
    latitude: '-1.0000',
    longitude: '+1.0000',
  });
  expect(
    onGetFormatCoordinatesToISO6709({
      latitude: -1,
      longitude: -1,
    }),
  ).toStrictEqual({
    latitude: '-1.0000',
    longitude: '-1.0000',
  });
});

test('onGetLocationAPIQueryByCoordinates', function () {
  expect(
    onGetLocationAPIQueryByCoordinates({
      coordinates: {
        latitude: 1,
        longitude: 1,
      },
    }),
  ).toBe('+1.0000+1.0000');
  expect(
    onGetLocationAPIQueryByCoordinates({
      coordinates: {
        latitude: 1,
        longitude: -1,
      },
    }),
  ).toBe('+1.0000-1.0000');
  expect(
    onGetLocationAPIQueryByCoordinates({
      coordinates: {
        latitude: -1,
        longitude: 1,
      },
    }),
  ).toBe('-1.0000+1.0000');
  expect(
    onGetLocationAPIQueryByCoordinates({
      coordinates: {
        latitude: -1,
        longitude: -1,
      },
    }),
  ).toBe('-1.0000-1.0000');
});
