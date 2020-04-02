import CarOwners from '../model/carOwners';

export interface CarOwnerDetails {
  firstName: string;
  lastName: string;
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

export async function firstFilter() {
  try {
    const owner = await CarOwners.find();

    const carModelYear = owner.filter(
      year =>
        year.car_model_year >= 1990 &&
        year.car_model_year <= 2010 &&
        year.gender === 'Male',
    );

    const carCountry = carModelYear.filter(
      country =>
        country.country === countryCheck[0] ||
        country.country === countryCheck[1] ||
        country.country === countryCheck[2] ||
        country.country === countryCheck[3] ||
        country.country === countryCheck[4] ||
        country.country === countryCheck[5] ||
        country.country === countryCheck[6] ||
        country.country === countryCheck[7] ||
        country.country === countryCheck[8],
    );

    const carColor = carCountry.filter(
      color =>
        color.car_color === colorCheck[0] ||
        color.car_color === colorCheck[1] ||
        color.car_color === colorCheck[2] ||
        color.car_color === colorCheck[3] ||
        color.car_color === colorCheck[4] ||
        color.car_color === colorCheck[5] ||
        color.car_color === colorCheck[6] ||
        color.car_color === colorCheck[7] ||
        color.car_color === colorCheck[8] ||
        color.car_color === colorCheck[9],
    );
    return carColor;
  } catch (error) {
    throw Error(error.message);
  }
}

export async function secondFilter() {
  try {
    const owner = await CarOwners.find();

    const carModelYear = owner.filter(
      year =>
        year.car_model_year >= 1990 &&
        year.car_model_year <= 2010 &&
        year.gender === '',
    );

    const carCountry = carModelYear.filter(
      country =>
        country.country === countryCheck[0] ||
        country.country === countryCheck[1] ||
        country.country === countryCheck[2] ||
        country.country === countryCheck[3] ||
        country.country === countryCheck[4] ||
        country.country === countryCheck[5] ||
        country.country === countryCheck[6] ||
        country.country === countryCheck[7] ||
        country.country === countryCheck[8],
    );

    const carColor = carCountry.filter(
      color =>
        color.car_color === colorCheck[0] ||
        color.car_color === colorCheck[1] ||
        color.car_color === colorCheck[2] ||
        color.car_color === colorCheck[3] ||
        color.car_color === colorCheck[4] ||
        color.car_color === colorCheck[5] ||
        color.car_color === colorCheck[6] ||
        color.car_color === colorCheck[7] ||
        color.car_color === colorCheck[8] ||
        color.car_color === colorCheck[9],
    );
    return carColor;
  } catch (error) {
    throw Error(error.message);
  }
}

export async function thirdFilter() {
  try {
    const owner = await CarOwners.find();

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

    const carColor = carCountry.filter(
      color =>
        color.car_color === colorCheck[0] ||
        color.car_color === colorCheck[1] ||
        color.car_color === colorCheck[2] ||
        color.car_color === colorCheck[3] ||
        color.car_color === colorCheck[4] ||
        color.car_color === colorCheck[5] ||
        color.car_color === colorCheck[6] ||
        color.car_color === colorCheck[7] ||
        color.car_color === colorCheck[8] ||
        color.car_color === colorCheck[9],
    );
    return carColor;
  } catch (error) {
    throw Error(error.message);
  }
}

export async function fourthFilter() {
  try {
    const owner = await CarOwners.find();

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
    const owner = await CarOwners.find();

    const carModelYear = owner.filter(
      year =>
        year.car_model_year >= 1990 &&
        year.car_model_year <= 2009 &&
        year.gender === '',
    );

    const carCountry = carModelYear.filter(
      country =>
        country.country === countryCheck[0] ||
        country.country === countryCheck[1] ||
        country.country === countryCheck[2] ||
        country.country === countryCheck[3] ||
        country.country === countryCheck[4] ||
        country.country === countryCheck[5] ||
        country.country === countryCheck[6] ||
        country.country === countryCheck[7] ||
        country.country === countryCheck[8],
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
