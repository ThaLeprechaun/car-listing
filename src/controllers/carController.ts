import CarOwners, { CarSchema } from '../model/carOwners';

export interface CarOwnerDetails {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  car_model: string;
  car_model_year: number;
  car_color: string;
  gender: string;
  job_title: string;
  bio: string;
}

const colorCheck = [
  'Green',
  'Violet',
  'Yellow',
  'Blue',
  'Teal',
  'Maroon',
  'Red',
  'Aquamarine',
  'Orange',
  'Mauv',
];
const countryCheck = [
  'China',
  'South Africa',
  'france',
  'Mexico',
  'Japan',
  'Estonia',
  'Colombia',
];

export async function createOwner(obj: CarOwnerDetails) {
  try {
    const carOwner = new CarOwners(obj);
    return carOwner.save();
  } catch (error) {
    throw Error(error.message);
  }
}

export async function retrieveData() {
  try {
    const owner = await CarOwners.find();

    if (!owner) {
      throw Error('Unable to retrieve car details');
    }
    return owner;
  } catch (error) {
    throw Error(error.message);
  }
}

export const retrievedData = retrieveData();

function filterCarCountry(_currentValue: any, index: number, arr: CarSchema[]) {
  return (
    arr[index].country === countryCheck[0] ||
    arr[index].country === countryCheck[1] ||
    arr[index].country === countryCheck[2] ||
    arr[index].country === countryCheck[3] ||
    arr[index].country === countryCheck[4] ||
    arr[index].country === countryCheck[5] ||
    arr[index].country === countryCheck[6]
  );
}

function filterCarColor(_currentValue: any, index: number, arr: CarSchema[]) {
  return (
    arr[index].car_color === colorCheck[0] ||
    arr[index].car_color === colorCheck[1] ||
    arr[index].car_color === colorCheck[2] ||
    arr[index].car_color === colorCheck[3] ||
    arr[index].car_color === colorCheck[4] ||
    arr[index].car_color === colorCheck[5] ||
    arr[index].car_color === colorCheck[6] ||
    arr[index].car_color === colorCheck[7] ||
    arr[index].car_color === colorCheck[8] ||
    arr[index].car_color === colorCheck[9]
  );
}

export async function firstFilter() {
  try {
    const owner = await retrievedData;
    const carModelYear = owner.filter(
      year =>
        year.car_model_year >= 1990 &&
        year.car_model_year <= 2010 &&
        year.gender === 'Male',
    );

    const carCountry = carModelYear.filter(filterCarCountry);
    const carColor = carCountry.filter(filterCarColor);

    return carColor;
  } catch (error) {
    throw Error(error.message);
  }
}

export async function secondFilter() {
  try {
    const owner = await retrieveData();
    const carModelYear = owner.filter(
      year =>
        year.car_model_year >= 1990 &&
        year.car_model_year <= 2010 &&
        year.gender === '',
    );

    const carCountry = carModelYear.filter(filterCarCountry);

    const carColor = carCountry.filter(filterCarColor);
    return carColor;
  } catch (error) {
    throw Error(error.message);
  }
}

export async function thirdFilter() {
  try {
    const owner = await retrieveData();
    const carModelYear = owner.filter(
      year =>
        year.car_model_year >= 1980 &&
        year.car_model_year <= 2002 &&
        year.gender === 'Female',
    );

    const carCountry = carModelYear.filter(
      country =>
        country.country !== countryCheck[0] ||
        country.country !== countryCheck[1] ||
        country.country !== countryCheck[2] ||
        country.country !== countryCheck[3] ||
        country.country !== countryCheck[4] ||
        country.country !== countryCheck[5] ||
        country.country !== countryCheck[6] ||
        country.country !== countryCheck[7] ||
        country.country !== countryCheck[8],
    );

    const carColor = carCountry.filter(filterCarColor);
    return carColor;
  } catch (error) {
    throw Error(error.message);
  }
}

export async function fourthFilter() {
  try {
    const owner = await retrieveData();
    const carModelYear = owner.filter(
      year =>
        year.car_model_year >= 1990 &&
        year.car_model_year <= 2000 &&
        year.gender === '',
    );

    const carCountry = carModelYear.filter(
      country =>
        country.country !== countryCheck[0] ||
        country.country !== countryCheck[1] ||
        country.country !== countryCheck[2] ||
        country.country !== countryCheck[3] ||
        country.country !== countryCheck[4] ||
        country.country !== countryCheck[5] ||
        country.country !== countryCheck[6] ||
        country.country !== countryCheck[7] ||
        country.country !== countryCheck[8],
    );

    const carColor = carCountry.filter(
      color =>
        color.car_color !== colorCheck[0] ||
        color.car_color !== colorCheck[1] ||
        color.car_color !== colorCheck[2] ||
        color.car_color !== colorCheck[3] ||
        color.car_color !== colorCheck[4] ||
        color.car_color !== colorCheck[5] ||
        color.car_color !== colorCheck[6] ||
        color.car_color !== colorCheck[7] ||
        color.car_color !== colorCheck[8] ||
        color.car_color !== colorCheck[9],
    );
    return carColor;
  } catch (error) {
    throw Error(error.message);
  }
}

export async function fifthFilter() {
  try {
    const owner = await retrieveData();
    const carModelYear = owner.filter(
      year =>
        year.car_model_year >= 1990 &&
        year.car_model_year <= 2009 &&
        year.gender === '',
    );

    const carCountry = carModelYear.filter(filterCarCountry);

    const carColor = carCountry.filter(
      color =>
        color.car_color !== colorCheck[0] ||
        color.car_color !== colorCheck[1] ||
        color.car_color !== colorCheck[2] ||
        color.car_color !== colorCheck[3] ||
        color.car_color !== colorCheck[4] ||
        color.car_color !== colorCheck[5] ||
        color.car_color !== colorCheck[6] ||
        color.car_color !== colorCheck[7] ||
        color.car_color !== colorCheck[8] ||
        color.car_color !== colorCheck[9],
    );
    return carColor;
  } catch (error) {
    throw Error(error.message);
  }
}
