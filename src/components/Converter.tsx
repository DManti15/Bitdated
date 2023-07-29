import { IonIcon, IonInput, IonItem, IonText } from "@ionic/react";
import { swapHorizontal } from "ionicons/icons";
import { useState } from "react";
import '../styles/Converter.scss'

interface ConverterProps {
  price: number | undefined
}

const Converter: React.FC<ConverterProps> = ({ price }) => {
  let [wa, setWa] = useState<number>(0);
  let [wo, setWo] = useState<number>(0);

  let a = JSON.stringify(price);
  let b = parseFloat(a);

  function converter() {
    if (wo !== 0) {
      setWa(wo * b);
    }
    if (wa !== 0) {
      setWo(wa / b);
    }
  }

  function clear() {
    setWo(0);
  }
  function clear2() {
    setWa(0);
  }

  return (
    <>
      <div className="ion-text-center ion-margin-top">
        <IonText className="convert-title">Convert</IonText>
      </div>
      <div className="values-contained">
        <div className="revenue-container">
          <IonText className="revenue-text">USD</IonText>
        </div>
        <div className="price-container">
          <IonText className="revenue-text">Currency</IonText>
        </div>
      </div>
      <div className="input-container">
        <IonItem color="none" lines="none">
          <IonInput
            name="num1"
            type="number"
            placeholder="USD"
            className="conversion-input"
            value={wa}
            onIonChange={(e) => setWa(parseFloat(e.detail.value!))}
            onIonFocus={clear}>
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
            value={wo}
            onIonChange={(e) => setWo(parseFloat(e.detail.value!))}
            onIonFocus={clear2}></IonInput>
        </IonItem>
      </div>
    </>
  );
};

export default Converter;
