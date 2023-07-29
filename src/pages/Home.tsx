import {
  IonContent,
  IonHeader,
  IonPage,
  useIonViewDidEnter
} from "@ionic/react";
import Chart from "../components/Chart";
import Converter from "../components/Converter";
import CurrencyInfo from "../components/CurrencyInfo";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useChartData } from "../hooks/useChartData";
import { useCurrencyData } from "../hooks/useCurrencyData";
import "../styles/Home.scss";

const Home: React.FC = () => {
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

  useIonViewDidEnter(() => {
    setInterval(() => {
      getChartData();
      getCurrencyData();
    }, 180000);
  });
  
  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>
      <IonContent>
        <Header currency={currency} logo={logo} slcChange={slcChange} setOptions={setOptions}/>
        <div className="homeSectionLine"></div>
        <Chart options={options}/>
        <div className="homeSectionLine"></div>
        <CurrencyInfo symbol={symbol} price={price} price24h={price24h} volume={volume}/>
        <div className="homeSectionLine"></div>
        <Converter price={price} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
