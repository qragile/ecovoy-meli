import meli from 'mercadolibre';
import http from 'http';
import express from 'express';
import dotenv from  'dotenv';

dotenv.config();
const app = express();

let apiInstance = new meli.OAuth20Api();
let opts = {
  grantType: process.env.GRANTTYPE, // String |
  clientId: process.env.CLIENT_ID, // String |
  clientSecret: process.env.SECRET_KEY, // String |
  redirectUri: process.env.REDIRECT_URI, // String |
  code: process.env.AUTHCODE, // String |
  refreshToken: process.env.REFRESHTOKEN, // String |
};
apiInstance.getToken(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    process.env.REFRESHTOKEN = response;
    console.log('API called successfully.');
  }
});
