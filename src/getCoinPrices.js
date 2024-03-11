// src/getCoinPrices.js
const api = require('./api');

async function getCoinPrices(coins, currency) {
  try {
    const response = await api.get(`/simple/price?ids=${coins.join(',')}&vs_currencies=${currency}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = getCoinPrices;