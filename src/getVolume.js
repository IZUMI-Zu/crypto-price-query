const api = require('./api');

async function getVolume(coinId, currency) {
  try {
    const response = await api.get(`/coins/${coinId}`);
    return response.data.market_data.total_volume[currency];
  } catch (error) {
    console.error(error);
  }
}

module.exports = getVolume;