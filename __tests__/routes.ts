import request from 'supertest';
import app from '../src/app';
import { connect, disconnect } from '../scripts/mongo-setup';
require('dotenv').config();
process.env = JSON.parse(JSON.stringify(process.env));

beforeAll(connect);
afterAll(disconnect);
