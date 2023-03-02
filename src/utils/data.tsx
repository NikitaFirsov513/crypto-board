export type TData = {
  meta: {
    symbol: string;
    interval?: string;
    currency?: string;
    exchange_timezone?: string;
    exchange?: string;
    mic_code?: string;
    type?: string;
    currency_base?: string;
    currency_quote?: string;
  };
  values: {
    datetime: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume?: string;
  }[];
  status: string;
};

export const data = {
  meta: {
    symbol: "BTC/USD",
    interval: "1day",
    currency_base: "Bitcoin",
    currency_quote: "US Dollar",
    exchange: "Coinbase Pro",
    type: "Digital Currency",
  },
  values: [
    {
      datetime: "2023-03-02",
      open: "23636.66992",
      high: "23786.63086",
      low: "23204.75977",
      close: "23314.81055",
    },
    {
      datetime: "2023-03-01",
      open: "23135.34961",
      high: "23978.40039",
      low: "23029.17969",
      close: "23636.66992",
    },
    {
      datetime: "2023-02-28",
      open: "23490.81055",
      high: "23595.59961",
      low: "23035.00000",
      close: "23128.75977",
    },
    {
      datetime: "2023-02-27",
      open: "23558.92969",
      high: "23887.00000",
      low: "23130.94922",
      close: "23492.50977",
    },
    {
      datetime: "2023-02-26",
      open: "23161.83008",
      high: "23680.34961",
      low: "23064.94922",
      close: "23558.92969",
    },
    {
      datetime: "2023-02-25",
      open: "23187.65039",
      high: "23220.09961",
      low: "22822.33008",
      close: "23167.38086",
    },
    {
      datetime: "2023-02-24",
      open: "23940.66992",
      high: "24130.33008",
      low: "22899.59961",
      close: "23188.28906",
    },
    {
      datetime: "2023-02-23",
      open: "24183.36914",
      high: "24599.83984",
      low: "23623.88086",
      close: "23941.82031",
    },
    {
      datetime: "2023-02-22",
      open: "24452.98047",
      high: "24474.51953",
      low: "23598.25000",
      close: "24183.08008",
    },
    {
      datetime: "2023-02-21",
      open: "24847.13086",
      high: "25167.17969",
      low: "24159.85938",
      close: "24451.90039",
    },
    {
      datetime: "2023-02-20",
      open: "24294.52930",
      high: "25102.60938",
      low: "23853.98047",
      close: "24841.59961",
    },
    {
      datetime: "2023-02-19",
      open: "24634.11914",
      high: "25174.89062",
      low: "24260.11914",
      close: "24307.16016",
    },
    {
      datetime: "2023-02-18",
      open: "24570.89062",
      high: "24860.08984",
      low: "24453.07031",
      close: "24638.34961",
    },
    {
      datetime: "2023-02-17",
      open: "23534.11914",
      high: "25008.32031",
      low: "23382.56055",
      close: "24570.89062",
    },
    {
      datetime: "2023-02-16",
      open: "24334.03906",
      high: "25235.83984",
      low: "23533.75977",
      close: "23534.11914",
    },
  ],
  status: "ok",
};
