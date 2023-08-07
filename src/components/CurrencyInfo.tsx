import { IonText } from "@ionic/react";
import '../styles/CurrencyInfo.scss'

interface CurrencyInfoProps {
  symbol: string 
  price: number 
  price24h: number 
  volume: number 
}

const CurrencyInfo: React.FC<CurrencyInfoProps> = ({ symbol, price, price24h, volume }) => {
  return (
    <>
      <div className="ion-text-center">
        <IonText className="info-title">Prices</IonText>
      </div>
      <div className="values-container">
        <div className="revenue-container">
          <IonText>Currency</IonText>
          <br />
          <IonText className="revenue-text"> {symbol}</IonText>
        </div>
        <div className="price-container">
          <IonText>Price (24h)</IonText>
          <br />
          <IonText className="revenue-text">${price24h}</IonText>
        </div>
      </div>
      <div className="values-container">
        <div className="revenue-container">
          <IonText>Miners Revenue</IonText>
          <br />
          <IonText className="revenue-text"> ${price}</IonText>
        </div>
        <div className="price-container">
          <IonText>Volume 24h</IonText>
          <br />
          <IonText className="revenue-text">${volume}</IonText>
        </div>
      </div>
    </>
  );
};

export default CurrencyInfo;
