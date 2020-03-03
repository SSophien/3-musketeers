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
