import { IonIcon, IonImg, IonItem, IonList, IonSelect, IonSelectOption, IonText, IonToggle } from "@ionic/react";
import { moon, sunny } from "ionicons/icons";
import { useState } from "react";
import { DARK_OPTIONS, LIGHT_OPTIONS } from "../constants/chartOptions";

interface HeaderProps {
  currency: string
  logo: string
  slcChange: (e: string) => void
  setOptions: React.Dispatch<React.SetStateAction<{}>>
}

const Header: React.FC<HeaderProps> = ({ currency, logo, slcChange, setOptions }) => {
  const [darkIcon, setDarkIcon] = useState(`${sunny}`);

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      setDarkIcon(`${moon}`);
      setOptions(DARK_OPTIONS);
    } else {
      setDarkIcon(`${sunny}`);
      setOptions(LIGHT_OPTIONS);
    }
  };

  return (
    <>
      <IonList className="listBg">
        <div className="currencyContainer">
          <IonItem color="none" lines="none">
            <IonImg className="logoBTC" src={logo}></IonImg>
            <IonText className="currencyName">{currency}</IonText>
          </IonItem>
          <IonItem lines="none" color="none">
            <IonIcon slot="end" icon={darkIcon} />
            <IonToggle
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
            />
          </IonItem>
          <IonItem color="none" lines="none" className="noRipple">
            <IonSelect
              placeholder="Select a Currency"
              className="currencySelector"
              value={currency}
              onIonChange={(e) => slcChange(e.detail.value)}>
              <IonSelectOption value="Bitcoin">Bitcoin</IonSelectOption>
              <IonSelectOption value="Ethereum">Ethereum</IonSelectOption>
            </IonSelect>
          </IonItem>
        </div>
      </IonList>
    </>
  );
};

export default Header;
