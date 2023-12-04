import { IonIcon, IonInput, IonItem, IonText } from "@ionic/react";
import { swapHorizontal } from "ionicons/icons";
import { useEffect, useState } from "react";
import "../styles/Converter.scss";

interface ConverterProps {
  price: number;
  currency: string
}

const Converter: React.FC<ConverterProps> = ({ price, currency }) => {
  const [currencyValue, setCurrencyValue] = useState<number>(0);
  const [cryptoValue, setCryptoValue] = useState<number>(0);

  function converter() {
    if (currencyValue !== 0) {
      setCryptoValue(currencyValue / price);
    }
    if (cryptoValue !== 0) {
      setCurrencyValue(cryptoValue * price);
    }
  }

  useEffect(() => {
    if (currency) {
      setCurrencyValue(0)
    }
  }, [currency])

  return (
    <>
      <div className="ion-text-center ion-margin-top">
        <IonText className="convert-title">Convert</IonText>
        <div className="convert-container">
          <IonItem color="none" lines="none">
            <div className="input-container">
              <IonText className="convert-label">USD</IonText>
              <IonInput
                name="num1"
                type="number"
                placeholder="USD"
                className="conversion-input"
                value={currencyValue}
                onIonInput={(e) =>
                  setCurrencyValue(parseFloat(e.detail.value!))
                }
                onIonFocus={() => setCryptoValue(0)}>
                {" "}
              </IonInput>
            </div>
          </IonItem>
          <IonIcon
            icon={swapHorizontal}
            className="conversion-icon"
            onClick={converter}></IonIcon>

          <IonItem color="none" lines="none">
            <div className="input-container">
              <IonText className="convert-label">Currency</IonText>
              <IonInput
                name="num2"
                type="number"
                placeholder="Currency"
                className="conversion-input"
                value={cryptoValue}
                onIonInput={(e) => setCryptoValue(parseFloat(e.detail.value!))}
                onIonFocus={() => setCurrencyValue(0)}></IonInput>
            </div>
          </IonItem>
        </div>
      </div>
    </>
  );
};

export default Converter;
