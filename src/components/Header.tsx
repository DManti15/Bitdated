import {
  IonImg,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonText
} from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";
import "../styles/Header.scss";

interface HeaderProps {
  currency: string;
  logo: string;
  slcChange: (e: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currency, logo, slcChange }) => {
  return (
    <>
      <IonList className="list-bg">
        <div className="currency-container">
          <IonItem color="none" lines="none">
            <IonImg className="logo-btc" src={logo}></IonImg>
            <IonText className="currency-name">{currency}</IonText>
          </IonItem>
          <IonItem color="none" lines="none" className="no-ripple">
            <IonSelect
              placeholder="Select a Currency"
              className="currency-selector"
              toggleIcon={chevronDownOutline}
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
