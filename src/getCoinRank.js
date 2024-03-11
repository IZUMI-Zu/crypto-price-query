const api = require('./api');

async function getCoinRank(coinId) {
  try {
    const response = await api.get(`/coins/${coinId}`);
    return response.data.market_cap_rank;
  } catch (error) {
    console.error(error);
  }
}

module.exports = getCoinRank;