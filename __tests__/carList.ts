import { connect, disconnect } from '../scripts/mongo-setup';
import {
  retrievedData,
  firstFilter,
  secondFilter,
  thirdFilter,
  fourthFilter,
  fifthFilter,
} from '../src/controllers/carController';
require('dotenv').config();
process.env = JSON.parse(JSON.stringify(process.env));

beforeAll(connect);
afterAll(disconnect);

describe('Filters data accurately', () => {
  test('Filters first List', async () => {
    const owner = await retrievedData;
    return expect(firstFilter()).resolves.toEqual(owner);
  });
  test('Filters Second List', async () => {
    const owner = await retrievedData;
    return expect(secondFilter()).resolves.toEqual(owner);
  });
  test('Filters third List', async () => {
    const owner = await retrievedData;
    return expect(thirdFilter()).resolves.toEqual(owner);
  });
  test('Filters fourth List', async () => {
    const owner = await retrievedData;
    return expect(fourthFilter()).resolves.toEqual(owner);
  });
  test('Filters fifth List', async () => {
    const owner = await retrievedData;
    return expect(fifthFilter()).resolves.toEqual(owner);
  });
});
