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
import React, { useState } from "react";
import { menu } from "ionicons/icons";
import { swapHorizontal } from "ionicons/icons";
import "./Home.scss";

const Home: React.FC = () => {
  let api = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";

  function myMethod() {
    api = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPriceBTC(data["last_trade_price"]);
        setPrice24hBTC(data["price_24h"]);
      });
  }

  window.addEventListener("load", () => {
    api = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        //setInterval(myMethod, 5000);
      });
  });

  const [priceBTC, setPriceBTC] = useState(myMethod);
  const [price24hBTC, setPrice24hBTC] = useState(myMethod);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="mainToolBar">
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
              <IonText className="currencyName">Bitcoin</IonText>
            </IonItem>
            <IonItem color="none" lines="none">
              <IonSelect
                placeholder="Select a Currency"
                className="currencySelector"
              >
                <IonSelectOption value="Bitcoin">Bitcoin</IonSelectOption>
                <IonSelectOption value="Etherium">Etherium</IonSelectOption>
              </IonSelect>
            </IonItem>
          </div>
        </IonList>
        <div className="homeSectionLine"></div>
        <IonImg className="homeGraph" src={"assets/Images/Graph.png"}></IonImg>
        <div className="homeSectionLine"></div>
        <div className="ion-text-center ion-margin-top">
          <IonText className="convertTitle">Prices</IonText>
        </div>
        <div className="valuesContainer">
          <div className="revenueContainer">
            <IonText>Currency</IonText>
            <br />
            <IonText className="revenueText"> BTC-USD</IonText>
          </div>
          <div className="priceContainer">
            <IonText>Price (24h)</IonText>
            <br />
            <IonText className="revenueText">${price24hBTC}</IonText>
          </div>
        </div>
        <div className="valuesContainer">
          <div className="revenueContainer">
            <IonText>Miners Revenue</IonText>
            <br />
            <IonText className="revenueText"> $60000</IonText>
          </div>
          <div className="priceContainer">
            <IonText>Bitcoin Price</IonText>
            <br />
            <IonText className="revenueText">${priceBTC}</IonText>
          </div>
        </div>
        <div className="homeSectionLine"></div>
        <div className="ion-text-center ion-margin-top">
          <IonText className="convertTitle">Convert</IonText>
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
