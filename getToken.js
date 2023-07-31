const axios = require("axios");

// Configuración de Auth0
const auth0Domain = 'url_auth0_domain';
const clientId = 'client_id';
const clientSecret = 'client_secret';
const audience = 'http://localhost:3000/api/productos';

// URL de Auth0 para obtener el token B2B
const auth0TokenUrl = `https://${auth0Domain}/oauth/token`;


// Función para obtener el token B2B de Auth0 utilizando async/await
module.exports.getB2BToken = async () => {
  try {
    const response = await axios.post(auth0TokenUrl, {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      audience: audience,
    });

    if (response.status === 200) {
      const accessToken = response.data.access_token;
      return accessToken;
    } else {
      throw new Error('Error al obtener el token B2B');
    }
  } catch (error) {
    console.error('Error al obtener el token B2B:', error.message);
    throw error;
  }
}
