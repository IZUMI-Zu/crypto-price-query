const getVolume = require('../src/getVolume'); 
jest.mock('../src/getVolume');

describe('getVolume', () => {
  it('fetches Volume for specified coins in USD', () => {
    // Set up the mock to resolve with a specific value
    getVolume.mockResolvedValue(55539580118);

    // Call the function with the test data
    return getVolume('bitcoin', 'usd')
      .then(volume => {
        // Check that the function was called with the correct arguments
        expect(getVolume).toHaveBeenCalledWith('bitcoin', 'usd');

        // Check that the function returned the correct value
        expect(volume).toEqual(55539580118);
      });
  });

  it('handles errors correctly', () => {
    // Set up the mock to reject with a specific error
    getVolume.mockRejectedValue(new Error('Network error'));

    // Call the function with the test data
    return getVolume('bitcoin', 'usd')
      .catch(error => {
        // Check that the function was called with the correct arguments
        expect(getVolume).toHaveBeenCalledWith('bitcoin', 'usd');

        // Check that the function threw the correct error
        expect(error).toEqual(new Error('Network error'));
      });
  });
});
