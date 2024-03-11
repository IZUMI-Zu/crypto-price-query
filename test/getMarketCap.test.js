const getMarketCap = require('../src/getMarketCap'); 
jest.mock('../src/getMarketCap');

describe('getMarketCap', () => {
  it('fetches MarketCap for specified coins in USD', () => {
    // Set up the mock to resolve with a specific value
    getMarketCap.mockResolvedValue(1408183147832);

    // Call the function with the test data
    return getMarketCap('bitcoin', 'usd')
      .then(marketCap => {
        // Check that the function was called with the correct arguments
        expect(getMarketCap).toHaveBeenCalledWith('bitcoin', 'usd');

        // Check that the function returned the correct value
        expect(marketCap).toEqual(1408183147832);
      });
  });

  it('handles errors correctly', () => {
    // Set up the mock to reject with a specific error
    getMarketCap.mockRejectedValue(new Error('Network error'));

    // Call the function with the test data
    return getMarketCap('bitcoin', 'usd')
      .catch(error => {
        // Check that the function was called with the correct arguments
        expect(getMarketCap).toHaveBeenCalledWith('bitcoin', 'usd');

        // Check that the function threw the correct error
        expect(error).toEqual(new Error('Network error'));
      });
  });
});
