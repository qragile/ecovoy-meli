var meli = require('mercadolibre-nodejs-sdk');

let apiInstance = new meli.RestClientApi();
let resource = 'resource_example'; // String |
let accessToken = 'accessToken_example'; // String |
apiInstance.resourceGet(resource, accessToken, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
