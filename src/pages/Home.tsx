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
import React, { useState,  } from "react";
import { menu } from "ionicons/icons";
import { swapHorizontal } from "ionicons/icons";
import "./Home.scss";

const Home: React.FC = () => {
  let api = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";

  function myMethod() {
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPrice(data["last_trade_price"]);
        setPrice24h(data["price_24h"]);
        setSymbol(data["symbol"]);
        setVolume(data["volume_24h"]);
      });
  }

  window.addEventListener("load", () => {;
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        //setInterval(myMethod, 5000);
      });
  });

  const [price, setPrice] = useState(myMethod);
  const [price24h, setPrice24h] = useState(myMethod);
  const [symbol, setSymbol] = useState(myMethod);
  const [volume, setVolume] = useState(myMethod);
  const [currency, setCurrency] = useState<string>('Bitcoin');
  const [logo, setLogo] = useState<string>("assets/Images/logoBTC.png");  

  function slcChange(e:any){
      if (e=='Bitcoin'){
        console.log('Bitcoin');
        setCurrency('Bitcoin');
        api = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
        setLogo("assets/Images/logoBTC.png")
        myMethod()
    } else if (e=='Etherium'){
      console.log('Etherium');
      setCurrency('Etherium');
      api = "https://api.blockchain.com/v3/exchange/tickers/ETH-USD";
      setLogo("assets/Images/logoETH.png")
      myMethod()

    }
  }

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
                src={logo}
              ></IonImg>
              <IonText className="currencyName">{currency}</IonText>
            </IonItem>
            <IonItem color="none" lines="none">
              <IonSelect
                placeholder="Select a Currency"
                className="currencySelector" onIonChange={e => slcChange(e.detail.value)}>
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
