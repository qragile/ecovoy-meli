import http from 'http';
import meli from 'mercadolibre-nodejs-sdk';
import express from 'express';
import dotenv from  'dotenv';

dotenv.config();
const app = express();


const InlineObject = {
  title: 'Item de test - No Ofertar',
  category_id: 'MLA5991',
  price: '350',
  currency_id: 'ARS',
  available_quantity: '12',
  buying_mode: 'buy_it_now',
  listing_type_id: 'bronze',
  condition: 'new',
  description: 'Item de Teste. Mercado Livre SDK',
  video_id: 'RXWn6kftTHY',
  pictures: [
    {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/f/fd/Ray_Ban_Original_Wayfarer.jpg',
    },
  ],
};

let apiInstance = new meli.RestClientApi();
let resource = 'items'; // Example "items" |
let accessToken = 'accessToken_example'; // String |
let body = InlineObject; // Object |
apiInstance.resourcePost(
  resource,
  accessToken,
  body,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully.');
    }
  }
);
