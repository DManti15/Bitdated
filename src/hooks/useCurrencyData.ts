import { useState, useEffect, useRef } from "react";
import { CURRENCY_API } from "../constants/apis";

export function useCurrencyData() {
  const [price, setPrice] = useState(0);
  const [price24h, setPrice24h] = useState(0);
  const [symbol, setSymbol] = useState('');
  const [volume, setVolume] = useState(0);
  const [currency, setCurrency] = useState<string>("Bitcoin");
  const [logo, setLogo] = useState<string>("assets/Images/logoBTC.png");

  const currencySymbolRef = useRef("BTC-USD");

  const getCurrencyData = () => {
    fetch(`${CURRENCY_API}${currencySymbolRef.current}`)
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
      currencySymbolRef.current = "BTC-USD";
      setCurrency("Bitcoin");
      setLogo("assets/Images/logoBTC.png");
      getCurrencyData();
    } else if (e === "Ethereum") {
      currencySymbolRef.current = "ETH-USD";
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
