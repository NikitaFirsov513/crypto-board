
export type TData = {
    meta: {
        symbol: string;
        interval: string;
        currency: string;
        exchange_timezone: string;
        exchange: string;
        mic_code: string;
        type: string;
    };
    values: {
        datetime: string;
        open: string;
        high: string;
        low: string;
        close: string;
        volume: string;
    }[];
    status: string;
}

export const data = {
    "meta": {
        "symbol": "AMZN",
        "interval": "1min",
        "currency": "USD",
        "exchange_timezone": "America/New_York",
        "exchange": "NASDAQ",
        "mic_code": "XNGS",
        "type": "Common Stock"
    },
    "values": [
        {
            "datetime": "2023-02-24 15:59:00",
            "open": "93.53500",
            "high": "93.65000",
            "low": "93.46000",
            "close": "93.49000",
            "volume": "1324763"
        },
        {
            "datetime": "2023-02-24 15:58:00",
            "open": "93.62000",
            "high": "93.62000",
            "low": "93.51500",
            "close": "93.53580",
            "volume": "752826"
        },
        {
            "datetime": "2023-02-24 15:57:00",
            "open": "93.51000",
            "high": "93.64000",
            "low": "93.50500",
            "close": "93.61500",
            "volume": "683087"
        },
        {
            "datetime": "2023-02-24 15:56:00",
            "open": "93.36000",
            "high": "93.53000",
            "low": "93.35000",
            "close": "93.51000",
            "volume": "617200"
        },
        {
            "datetime": "2023-02-24 15:55:00",
            "open": "93.12500",
            "high": "93.38000",
            "low": "93.11000",
            "close": "93.36000",
            "volume": "622311"
        },
        {
            "datetime": "2023-02-24 15:54:00",
            "open": "92.93500",
            "high": "93.13000",
            "low": "92.92000",
            "close": "93.12500",
            "volume": "417136"
        },
        {
            "datetime": "2023-02-24 15:53:00",
            "open": "92.82000",
            "high": "92.96000",
            "low": "92.82000",
            "close": "92.93500",
            "volume": "347250"
        },
        {
            "datetime": "2023-02-24 15:52:00",
            "open": "92.67000",
            "high": "92.82500",
            "low": "92.66000",
            "close": "92.82000",
            "volume": "436407"
        },
        {
            "datetime": "2023-02-24 15:51:00",
            "open": "92.57500",
            "high": "92.68000",
            "low": "92.55500",
            "close": "92.67240",
            "volume": "265391"
        },
        {
            "datetime": "2023-02-24 15:50:00",
            "open": "92.62000",
            "high": "92.68000",
            "low": "92.53000",
            "close": "92.57500",
            "volume": "406295"
        },
        
    ],
    "status": "ok"
}