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
  IonLabel,
  IonToggle,
} from '@ionic/react';
import React, { useState,  } from "react";
import { menu, options } from "ionicons/icons";
import { swapHorizontal } from "ionicons/icons";
import "./Home.scss";
import * as HighCharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import { clear } from "console";
import { moon } from 'ionicons/icons';
import { sunny } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";

const Home: React.FC = () => {
  let api = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
  let graphAPI = "https://api.blockchain.info/charts/market-price?timespan=1weeks&sampled=true&metadata=false&cors=true&format=json";

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      setDarkIcon(`${sunny}`);
      setOptions({
        title:{
          style:{
            color: '#f4f5f8'
          }
        },
        legend:{
          itemStyle:{
            color: '#f4f5f8'
          }
        },
        xAxis:{
          labels:{
            style:{
              color: '#f4f5f8'
            }
          }
        },
        yAxis:{
          labels:{
            style:{
              color: '#f4f5f8'
            }
          }
        }
      });
    } else {
      setDarkIcon(`${moon}`);
      setOptions({
        title:{
          style:{
            color: '#19191b'
          }
        },
        legend:{
          itemStyle:{
            color: '#19191b'
          }
        },
        xAxis:{
          labels:{
            style:{
              color: '#19191b'
            }
          }
        },
        yAxis:{
          labels:{
            style:{
              color: '#19191b'
            }
          }
        }
      });
    }
  }


  
  function myMethod() {
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPrice(data["last_trade_price"]);
        setPrice24h(data["price_24h"]);
        setSymbol(data["symbol"]);
        setVolume(data["volume_24h"]);
      });
      fetch(graphAPI)
      .then((response) => {
        return response.json();
      })
      .then((dataG) => {
        console.log(dataG.values);
        const keys = Object.keys(dataG.values)
        console.log(keys);
        let myDataArr: { x: number; y: any; }[] = [];
        keys.forEach(key => {
          let data1 = dataG.values[key].x*1000;
          let data2 = dataG.values[key].y;
          let myData = {"x": data1, "y": data2};
          myDataArr.push(myData);
          console.log(myData);
        });
        setOptions({series: [{data: myDataArr}] });
      });
    return null;
  }

  useIonViewDidEnter( () => {;
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setInterval(myMethod, 180000);
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
  const [darkIcon, setDarkIcon] = useState(`${moon}`);
  let options: any;
  let setOptions: any;
  [options, setOptions] = useState({

    chart:{
      backgroundColor: 'transparent',
      height: '300'
    },
  
    title:{
      text:'Market Price (USD)',
      style: {
        color: '#2d2d30'
      }
    },

    legend:{
      itemStyle:{
        color: '#2d2d30'
      }
    },

    credits:{
      enabled: false
    },

    xAxis:{
        type: 'datetime',
        accessibility: {
          rangeDescription: "Range: 2021 to 2022"
        },
        labels: {
          format: '{value:%d %b}',
          style: {
            color: '#2d2d30'
          },
        },
        plotOptions: {
          series: {
            pointStart: 2022,
            }
          }
    },
    yAxis:{
      title:{
        text:''
      },
      categories: 'USD',
      labels:{
        format: '${value}',
        style: {
          color: '#2d2d30'
        }
      }
    },

    series: [{
      name:'Bitcoin',
      data: [],
      color: '#F7931A'
      }
   ],  
  });
  
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
    } else if (e=='Ethereum'){
      setCurrency('Ethereum');
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
          <IonTitle className="toolbarText">Bitdated</IonTitle>
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
                onIonChange={e => slcChange(e.detail.value)}>
                <IonSelectOption value="Bitcoin">Bitcoin</IonSelectOption>
                <IonSelectOption value="Ethereum">Ethereum</IonSelectOption>
              </IonSelect>
            </IonItem>
          </div>
        </IonList>
        <div className="homeSectionLine"></div>

        
        <div id='container' style={{display: "block", padding: "0 15px 0 15px"}}>
          <HighchartsReact highcharts={HighCharts} options={options}/>
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
