import http from 'http';
import express from 'express';
import dotenv from  'dotenv';

dotenv.config();
const app = express();

var meli = require('mercadolibre-nodejs-sdk');

let apiInstance = new meli.ItemsApi();
let id = 'id_example'; // String |
apiInstance.itemsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
