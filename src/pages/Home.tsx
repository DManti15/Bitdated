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
  useIonViewDidEnter,
} from "@ionic/react";
import React, { useState,  } from "react";
import { menu } from "ionicons/icons";
import { swapHorizontal } from "ionicons/icons";
import "./Home.scss";
import * as HighCharts from 'highcharts';
import { clear } from "console";

const Home: React.FC = () => {
  let api = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
  let graphAPI = "https://api.blockchain.info/charts/market-price?timespan=1weeks&sampled=true&metadata=false&cors=true&format=json"

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

  useIonViewDidEnter( () => {;
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setInterval(myMethod, 5000);
      });
      fetch(graphAPI)
      .then((response) => {
        return response.json();
      })
      .then((dataG) => {
        console.log(dataG.values);
        //setInterval(myMethod, 5000);
      });
  });

  const [price, setPrice] = useState(myMethod);
  const [price24h, setPrice24h] = useState(myMethod);
  const [symbol, setSymbol] = useState(myMethod);
  const [volume, setVolume] = useState(myMethod);
  const [currency, setCurrency] = useState<string>('Bitcoin');
  const [logo, setLogo] = useState<string>("assets/Images/logoBTC.png");
  
  let a= JSON.stringify(price);
  let b= parseFloat(a); 

  let [wa, setWa] = useState<number>(0);
  let [wo, setWo] = useState<number>(0);


  function converter(){
    if(wo!==0){
        setWa(wo*b);
    }
    if(wa!==0){
      setWo(wa/b);
  }
  }

  function clear(){
    setWo(0)
  }
  function clear2(){
    setWa(0)
  }

  //Value

  function slcChange(e:any){
      if (e=='Bitcoin'){
        setCurrency('Bitcoin');
        api = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
        setLogo("assets/Images/logoBTC.png")
        myMethod()
        clear()
        clear2()
    } else if (e=='Etherium'){
      setCurrency('Etherium');
      api = "https://api.blockchain.com/v3/exchange/tickers/ETH-USD";
      setLogo("assets/Images/logoETH.png")
      myMethod()
      clear()
      clear2()
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
                className="currencySelector" value={currency} onIonChange={e => slcChange(e.detail.value)}>
                <IonSelectOption value="Bitcoin">Bitcoin</IonSelectOption>
                <IonSelectOption value="Etherium">Etherium</IonSelectOption>
              </IonSelect>
            </IonItem>
          </div>
        </IonList>
        <div className="homeSectionLine"></div>

        
        <div id='container' className="display: block;"	></div>

        
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
        <div className="valuesContained">
        <div className="revenueContainer">
          <IonText className="revenueText"> USD</IonText>
        </div>
        <div className="priceContainer">
            <IonText className="revenueText">Currency</IonText>
          </div>
        </div>
        <div className="inputContainer">
          <IonItem color="none" lines="none">
            <IonInput name="num1" type="number" placeholder="USD" className="conversionInput" value={wa} onIonChange={e => setWa(parseFloat(e.detail.value!))} onIonFocus={clear}> </IonInput>
          </IonItem>
          <IonIcon icon={swapHorizontal} className="conversionIcon" onClick={converter}></IonIcon>
          
          <IonItem color="none" lines="none">
            <IonInput name="num2" type="number" placeholder="Currency" className="conversionInput" value={wo} onIonChange={e => setWo(parseFloat(e.detail.value!))} onIonFocus={clear2}></IonInput>
          </IonItem>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
