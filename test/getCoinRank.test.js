const getCoinRank = require('../src/getCoinRank'); 
jest.mock('../src/getCoinRank');

describe('getCoinRank', () => {
  it('fetches rank for specified coins in USD', () => {
    // Set up the mock to resolve with a specific value
    getCoinRank.mockResolvedValue(1);

    // Call the function with the test data
    return getCoinRank('bitcoin')
      .then(rank => {
        // Check that the function was called with the correct arguments
        expect(getCoinRank).toHaveBeenCalledWith('bitcoin');

        // Check that the function returned the correct value
        expect(rank).toEqual(1);
      });
  });

  it('handles errors correctly', () => {
    // Set up the mock to reject with a specific error
    getCoinRank.mockRejectedValue(new Error('Network error'));

    // Call the function with the test data
    return getCoinRank('bitcoin')
      .catch(error => {
        // Check that the function was called with the correct arguments
        expect(getCoinRank).toHaveBeenCalledWith('bitcoin');

        // Check that the function threw the correct error
        expect(error).toEqual(new Error('Network error'));
      });
  });
});
