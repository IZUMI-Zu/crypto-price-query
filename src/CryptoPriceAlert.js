const api = require('./api');

class CryptoPriceAlert {
  constructor(crypto, threshold, callback) {
    this.crypto = crypto;
    this.threshold = threshold;
    this.callback = callback;
  }

  async getPrice() {
    try {
      const response = await api.get(`/simple/price?ids=${this.crypto}&vs_currencies=usd`);
      return response.data[this.crypto].usd;
    } catch (error) {
      console.error(error);
    }
  }

  async checkPrice() {
    const price = await this.getPrice();
    if (price >= this.threshold) {
      this.callback(this.crypto, price);
    }
  }

  startChecking(interval = 60000) {
    this.checkPrice();
    setInterval(() => this.checkPrice(), interval);
  }
}

module.exports = CryptoPriceAlert;