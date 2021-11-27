import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonText,
  IonImg,
  IonInput,
} from "@ionic/react";
import { menu } from "ionicons/icons";
import { swapHorizontal } from "ionicons/icons";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton className="toolbarButton" slot="start">
            <IonIcon icon={menu} className="toolbarIcon"></IonIcon>
          </IonButton>
          <div className="toolbarSectionLine" slot="start"></div>
          <IonTitle className="toolbarText">Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="listBg">
          <div className="currencyContainer">
            <IonItem color="none" lines="none">
              <IonImg
                className="logoBTC"
                src={"assets/Images/logoBTC.png"}
              ></IonImg>
              <IonText>Bitcoin</IonText>
            </IonItem>
            <IonItem color="none" lines="none">
              <IonSelect placeholder="Select a Currency" className="currencySelector">
                <IonSelectOption value="Dollar">Dollars</IonSelectOption>
                <IonSelectOption value="Cordoba">Cordobas</IonSelectOption>
              </IonSelect>
            </IonItem>
          </div>
        </IonList>
        <div className="homeSectionLine"></div>
        <IonImg className="homeGraph" src={"assets/Images/Graph.png"}></IonImg>
        <div className="homeSectionLine"></div>
        <div className="valuesContainer">
          <div className="revenueContainer">
            <IonText>Miners Revenue</IonText>
            <br />
            <IonText> $60000</IonText>
          </div>
          <div className="priceContainer">
            <IonText>Bitcoin Price</IonText>
            <br />
            <IonText> $35000</IonText>
          </div>
        </div>
        <div className="homeSectionLine"></div>
        <div className="ion-text-center ion-margin-top">
          <IonText>Convert</IonText>
        </div>
        <div className="inputContainer">
          <IonItem color="none" lines="none">
            <IonInput placeholder="USD" className="conversionInput"></IonInput>
          </IonItem>
          <IonIcon icon={swapHorizontal} className="conversionIcon"></IonIcon>
          <IonItem color="none" lines="none">
            <IonInput placeholder="BTC" className="conversionInput"></IonInput>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
