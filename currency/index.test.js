const nock = require('nock');
const currency = require('./');

beforeEach(() => {
  nock('https://api.exchangeratesapi.io')
    .get('/latest?base=USD')
    .reply(200, {
      'base': 'USD',
      'rates': {
        'EUR': 0.899
      }
    });

  nock('https://api.exchangeratesapi.io')
    .get('/latest?base=EUR')
    .reply(200, {
      'base': 'EUR',
      'rates': {
          'USD': 1.1122
      }
    });

  nock('https://blockchain.info')
    .get('/ticker')
    .reply(200, {
      'USD': {
        '15m': 8944.49,
        'last': 8944.49,
        'buy': 8944.49,
        'sell': 8944.49,
        'symbol': '$'
      },
      'EUR': {
        '15m': 8048.11,
        'last': 8048.11,
        'buy': 8048.11,
        'sell': 8048.11,
        'symbol': '€'
      }
    });
});

test('convert 1 USD to EUR', async () => {
  const amount = 1;
  const from = 'USD';
  const to = 'EUR';
  const opts = {amount, from, to}
  const result = await currency(opts);
  console.log(`${amount} ${from} = ${result} ${to}`);
});

test('convert 1 USD to USD', async () => {
  const amount = 1;
  const from = 'USD';
  const to = 'USD';
  const opts = {amount, from, to}
  const result = await currency(opts);
  console.log(`${amount} ${from} = ${result} ${to}`);
});

test('convert 1 EUR to USD', async () => {
  const amount = 1;
  const from = 'EUR';
  const to = 'USD';
  const opts = {amount, from, to}
  const result = await currency(opts);
  console.log(`${amount} ${from} = ${result} ${to}`);
});

test('convert 1 BTC to USD', async () => {
  const amount = 1;
  const from = 'BTC';
  const to = 'USD';
  const opts = {amount, from, to}
  const result = await currency(opts);
  console.log(`${amount} ${from} = ${result} ${to}`);
});

test('convert 1 BTC to EUR', async () => {
  const amount = 1;
  const from = 'BTC';
  const to = 'EUR';
  const opts = {amount, from, to}
  const result = await currency(opts);
  console.log(`${amount} ${from} = ${result} ${to}`);
});

test('convert without arguments', async () => {
  const result = await currency({})
  console.log(`1 USD = ${result} BTC`);
});

test('convert with amount only', async () => {
  const amount = 150;
  const result = await currency({amount})
  console.log(`1 USD = ${result} BTC`);
});

test('convert with amount and (from) currency only', async () => {
  const amount = 100;
  const from = 'JPY';
  const result = await currency(100, 'JPY')
  console.log(`1 ${from} = ${result} BTC`);
});

test('convert without a correct `from` or `to` currency value', async () => {
  const amount = 1;
  const from = 'JPY';
  const to = 'lol';
  const result = await currency({amount, from, to});
  console.log(`${amount} ${from} = ${result} ${to}`);
});
