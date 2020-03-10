# Currency

A simple money rate converter

## Getting Started

1. Fork the project via `github`

2. Clone your forked repository project `https://github.com/YOUR_USERNAME/3-musketeers`

```sh
> cd /path/to/workspace
> git clone git@github.com:YOUR_USERNAME/3-musketeers.git
```

### Prerequisites

1. Install Node.js on your computer https://nodejs.org/en/download/

2. Install packages (axios, money, ora, nock) via `CMD`

```sh
> npm install axios
> npm install money
> npm install ora
```

### Installing

Now install the currency script

```sh
> cd /path/to/workspace/3-musketeers/currency
> npm install
> node cli.js
#Return bitcoin value for $1 USD
```

### Examples

1. Default `RUN`
```sh
> node cli.js
#Return $1 USD converted to Bitcoin
```

2. `RUN` with coefficient
```sh
> node cli.js 10
#Will return $10 USD to Bitcoin
```

3. `RUN` with different currencies
```sh
> node cli.js 1 EUR JPY
#Will return 1 EUR to JPY
```

### Help command
```sh
> node cli.js --help
```

### Available currencies (ISO 4217)
|---|---|
|BTC|Bitcoin|
|CAD|Canadian dollar|
|HKD|Honk Kong dollar|
|ISK|Icelandic króna|
|PHP|Philippine peso|
|DKK|Danish krone|
|HUF|Hungarian forint|
|CZK|Czechoslovak koruna|
|AUD|Australian dollar|
|RON|Romanian leu|
|SEK|Swedish krona/kronor|
|IDR|Indonesian rupiah|
|INR|Indian rupee|
|BRL|Brazilian cruzeiro real|
|RUB|Russian ruble|
|HRK|Croatian dinar|
|JPY|Japanese yen|
|THB|Thai baht|
|CHF|Swiss franc|
|SGD|Singapore dollar|
|PLN|Polish zloty|
|BGN|Bulgarian lev|
|TRY|Turkish lira|
|CNY|Renminbi (Chinese) yuan|
|NOK|Norwegian krone|
|NZD|New Zealand dollar|
|ZAR|South African rand|
|USD|United States dollar|
|MXN|Mexican peso|
|ILS|Israeli new shekel|
|GBP|Pound sterling|
|KRW|South Korean won|
|MYR|Malaysian ringgit|
