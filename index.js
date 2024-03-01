const axios = require('axios');

const getCoinPrices = async (coins, currency = 'usd') => {
    if (!Array.isArray(coins)) {
        throw new Error('The first argument must be an array of coin names.');
    }

    if (typeof currency !== 'string') {
        throw new Error('The second argument must be a string representing the currency.');
    }

    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(',')}&vs_currencies=${currency}`);
        return response.data;
    } catch (error) {
        throw new Error('An error occurred while fetching the coin prices.');
    }
};


module.exports = getCoinPrices;
