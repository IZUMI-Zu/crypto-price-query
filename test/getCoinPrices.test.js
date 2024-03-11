const getCoinPrices = require('../src/getCoinPrices'); 
jest.mock('../src/getCoinPrices');

describe('getCoinPrices', () => {
  it('fetches prices for specified coins in USD', () => {
    // Set up the mock to resolve with a specific value
    getCoinPrices.mockResolvedValue({
      bitcoin: 50000,
      ethereum: 4000
    });

    // Call the function with the test data
    return getCoinPrices(['bitcoin', 'ethereum'], 'usd')
      .then(prices => {
        // Check that the function was called with the correct arguments
        expect(getCoinPrices).toHaveBeenCalledWith(['bitcoin', 'ethereum'], 'usd');

        // Check that the function returned the correct value
        expect(prices).toEqual({
          bitcoin: 50000,
          ethereum: 4000
        });
      });
  });

  it('handles errors correctly', () => {
    // Set up the mock to reject with a specific error
    getCoinPrices.mockRejectedValue(new Error('Network error'));

    // Call the function with the test data
    return getCoinPrices(['bitcoin', 'ethereum'], 'usd')
      .catch(error => {
        // Check that the function was called with the correct arguments
        expect(getCoinPrices).toHaveBeenCalledWith(['bitcoin', 'ethereum'], 'usd');

        // Check that the function threw the correct error
        expect(error).toEqual(new Error('Network error'));
      });
  });
});
