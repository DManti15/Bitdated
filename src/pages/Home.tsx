import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
  useIonViewDidEnter
} from "@ionic/react";
import * as HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { menu, moon, sunny, swapHorizontal } from "ionicons/icons";
import React, { useState } from "react";
import { DARK_OPTIONS, LIGHT_OPTIONS } from "../constants/chartOptions";
import { useChartData } from "../hooks/useChartData";
import { useCurrencyData } from "../hooks/useCurrencyData";
import "./Home.scss";

const Home: React.FC = () => {
  
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


  useIonViewDidEnter(() => {
    setInterval(() => {
      getChartData();
      getCurrencyData();
    }, 180000);
  });

  const [darkIcon, setDarkIcon] = useState(`${sunny}`);
  const { options, setOptions, getChartData } = useChartData();
  const {
    price,
    price24h,
    symbol,
    volume,
    currency,
    logo,
    slcChange,
    getCurrencyData,
  } = useCurrencyData();
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

  //Value

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="mainToolBar">
          <IonButton className="toolbarButton" slot="start">
            <IonIcon icon={menu} className="toolbarIcon"></IonIcon>
          </IonButton>
          <div className="toolbarSectionLine" slot="start"></div>
          <IonTitle className="toolbarText">Bitdated</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
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
        <div className="homeSectionLine"></div>

        <div
          id="container"
          style={{ display: "block", padding: "0 15px 0 15px" }}>
          <HighchartsReact highcharts={HighCharts} options={options} />
        </div>

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
      </IonContent>
    </IonPage>
  );
};

export default Home;
