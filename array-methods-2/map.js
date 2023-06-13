const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObjects = prices.map((element) => ({
  prices: element,
  salePrice: element / 2,
}));
console.log('Price objects', priceObjects);
