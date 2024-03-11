// src/api.js
const axios = require('axios');

const API_ENDPOINT = 'https://api.coingecko.com/api/v3';

const api = axios.create({
  baseURL: API_ENDPOINT,
});

module.exports = api;