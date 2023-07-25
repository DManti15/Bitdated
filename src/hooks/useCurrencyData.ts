import { useState, useEffect } from "react";
import { CURRENCY_API } from "../constants/apis";

export function useCurrencyData() {
  const [price, setPrice] = useState();
  const [price24h, setPrice24h] = useState();
  const [symbol, setSymbol] = useState();
  const [volume, setVolume] = useState();
  const [currency, setCurrency] = useState<string>("Bitcoin");
  const [logo, setLogo] = useState<string>("assets/Images/logoBTC.png");

  let currencySymbol = "BTC-USD";

  const getCurrencyData = () => {
    fetch(`${CURRENCY_API}${currencySymbol}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPrice(data["last_trade_price"]);
        setPrice24h(data["price_24h"]);
        setSymbol(data["symbol"]);
        setVolume(data["volume_24h"]);
      });
  };

  const slcChange = (e: string) => {
    if (e === "Bitcoin") {
      currencySymbol = "BTC-USD";
      setCurrency("Bitcoin");
      setLogo("assets/Images/logoBTC.png");
      getCurrencyData();
    } else if (e === "Ethereum") {
      currencySymbol = "ETH-USD";
      setCurrency("Ethereum");
      setLogo("assets/Images/logoETH.png");
      getCurrencyData();
    }
  };

  useEffect(getCurrencyData, []);

  return {
    price,
    price24h,
    symbol,
    volume,
    currency,
    logo,
    slcChange,
    getCurrencyData,
  };
}