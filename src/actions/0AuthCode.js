
dotenv.config();
const app = express();

var meli = require('mercadolibre-nodejs-sdk');
let apiInstance = new meli.OAuth20Api();

// Get the Auth URL, for example, country Argentina -> 1
const authUrl = apiInstance.apiClient.getBasePathFromSettings(5);
// Auth URLs Options by country
// [0]  - https://api.mercadolibre.com (default API endpoint)
// [1]  - https://auth.mercadolibre.com.ar
// [2]  - https://auth.mercadolivre.com.br
// [3]  - https://auth.mercadolibre.com.co
// [4]  - https://auth.mercadolibre.com.mx
// [5]  - https://auth.mercadolibre.com.uy
// [6]  - https://auth.mercadolibre.cl
// [7]  - https://auth.mercadolibre.com.cr
// [8]  - https://auth.mercadolibre.com.ec
// [9]  - https://auth.mercadolibre.com.ve
// [10] - https://auth.mercadolibre.com.pa
// [11] - https://auth.mercadolibre.com.pe
// [12] - https://auth.mercadolibre.com.pt
// [13] - https://auth.mercadolibre.com.do

// Use the correct auth URL
apiInstance.apiClient.basePath = authUrl;

let responseType = process.env.CODE; // String |
let clientId = process.env.APP_ID; // String |
let redirectUri = process.env.REDIRECT_URI; // String |
apiInstance.auth(
  responseType,
  clientId,
  redirectUri,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      process.env.AUTHCODE = response;
      console.log('API called successfully.');
    }
  }
);
