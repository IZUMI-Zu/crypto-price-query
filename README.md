# Crypto Price Query

A simple NPM package for querying the current price of cryptocurrencies.

## Installation

Install with npm:

```bash
npm install crypto-price-query
```

## Usage

First, you need to import crypto-price-query:

const getCoinPrices = require('crypto-price-query');
Then, you can use the getCoinPrices function to query the price of one or more cryptocurrencies:

```js
getCoinPrices(['bitcoin', 'ethereum'], 'usd')
  .then(prices => console.log(prices))
  .catch(error => console.error(error));
```

This will return an object with the coin names as keys and their corresponding prices as values like

```js
{
  bitcoin: { usd: 62064 },
  ethereum: { usd: 3411.79 }
}
```

## API

`getCoinPrices(coins, currency)`

coins: An array of strings, containing the names of the cryptocurrencies you want to query.
currency: A string representing the currency you want to query against. Defaults to 'usd'.
Error Handling
If an error occurs during the query, the getCoinPrices function will throw an exception. You should use a try...catch statement or the catch method of the Promise to handle this exception.

## License

MIT
