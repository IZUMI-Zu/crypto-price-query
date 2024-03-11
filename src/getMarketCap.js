const api = require('./api');

async function getMarketCap(coinId, currency) {
  try {
    const response = await api.get(`/coins/${coinId}`);
    return response.data.market_data.market_cap[currency];
  } catch (error) {
    console.error(error);
  }
}

module.exports = getMarketCap;