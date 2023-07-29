import { IonText } from "@ionic/react";
import '../styles/CurrencyInfo.scss'

interface CurrencyInfoProps {
  symbol: string | undefined
  price: number | undefined
  price24h: number | undefined
  volume: number | undefined
}

const CurrencyInfo: React.FC<CurrencyInfoProps> = ({ symbol, price, price24h, volume }) => {
  return (
    <>
      <div className="ion-text-center ion-margin-top">
        <IonText className="convertTitle">Prices</IonText>
      </div>
      <div className="valuesContainer">
        <div className="revenueContainer">
          <IonText>Currency</IonText>
          <br />
          <IonText className="revenueText"> {symbol}</IonText>
        </div>
        <div className="priceContainer">
          <IonText>Price (24h)</IonText>
          <br />
          <IonText className="revenueText">${price24h}</IonText>
        </div>
      </div>
      <div className="valuesContainer">
        <div className="revenueContainer">
          <IonText>Miners Revenue</IonText>
          <br />
          <IonText className="revenueText"> ${price}</IonText>
        </div>
        <div className="priceContainer">
          <IonText>Volume 24h</IonText>
          <br />
          <IonText className="revenueText">${volume}</IonText>
        </div>
      </div>
    </>
  );
};

export default CurrencyInfo;
