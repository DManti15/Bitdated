import { IonIcon, IonInput, IonItem, IonText } from "@ionic/react";
import { swapHorizontal } from "ionicons/icons";
import { useState } from "react";

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
        <IonText className="convertTitle">Convert</IonText>
      </div>
      <div className="valuesContained">
        <div className="revenueContainer">
          <IonText className="revenueText">USD</IonText>
        </div>
        <div className="priceContainer">
          <IonText className="revenueText">Currency</IonText>
        </div>
      </div>
      <div className="inputContainer">
        <IonItem color="none" lines="none">
          <IonInput
            name="num1"
            type="number"
            placeholder="USD"
            className="conversionInput"
            value={wa}
            onIonChange={(e) => setWa(parseFloat(e.detail.value!))}
            onIonFocus={clear}>
            {" "}
          </IonInput>
        </IonItem>
        <IonIcon
          icon={swapHorizontal}
          className="conversionIcon"
          onClick={converter}></IonIcon>

        <IonItem color="none" lines="none">
          <IonInput
            name="num2"
            type="number"
            placeholder="Currency"
            className="conversionInput"
            value={wo}
            onIonChange={(e) => setWo(parseFloat(e.detail.value!))}
            onIonFocus={clear2}></IonInput>
        </IonItem>
      </div>
    </>
  );
};

export default Converter;
