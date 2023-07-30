import { IonIcon, IonInput, IonItem, IonText } from "@ionic/react";
import { swapHorizontal } from "ionicons/icons";
import { useState } from "react";
import "../styles/Converter.scss";

interface ConverterProps {
  price: number;
}

const Converter: React.FC<ConverterProps> = ({ price }) => {
  const [currencyValue, setCurrencyValue] = useState(0);
  const [cryptoValue, setCryptoValue] = useState(0);

  function converter() {
    if (currencyValue !== 0) {
      setCryptoValue(currencyValue / price);
    }
    if (cryptoValue !== 0) {
      setCurrencyValue(cryptoValue * price);
    }
  }

  return (
    <>
      <div className="ion-text-center ion-margin-top">
        <IonText className="convert-title">Convert</IonText>
        <div className="values-contained">
          <div className="revenue-container">
            <IonText className="convert-label">USD</IonText>
          </div>
          <div className="price-container">
            <IonText className="convert-label">Currency</IonText>
          </div>
        </div>
        <div className="input-container">
          <IonItem color="none" lines="none">
            <IonInput
              name="num1"
              type="number"
              placeholder="USD"
              className="conversion-input"
              value={currencyValue}
              onIonInput={(e) => setCurrencyValue(parseFloat(e.detail.value!))}
              onIonFocus={() => setCryptoValue(0)}>
              {" "}
            </IonInput>
          </IonItem>
          <IonIcon
            icon={swapHorizontal}
            className="conversion-icon"
            onClick={converter}></IonIcon>

          <IonItem color="none" lines="none">
            <IonInput
              name="num2"
              type="number"
              placeholder="Currency"
              className="conversion-input"
              value={cryptoValue}
              onIonInput={(e) => setCryptoValue(parseFloat(e.detail.value!))}
              onIonFocus={() => setCurrencyValue(0)}></IonInput>
          </IonItem>
        </div>
      </div>
    </>
  );
};

export default Converter;
