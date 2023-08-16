import {
  IonContent,
  IonHeader,
  IonPage,
  useIonViewDidEnter,
} from "@ionic/react";
import { moon, sunny } from "ionicons/icons";
import { useState } from "react";
import Chart from "../components/Chart";
import Converter from "../components/Converter";
import CurrencyInfo from "../components/CurrencyInfo";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { DARK_OPTIONS, LIGHT_OPTIONS } from "../constants/chartOptions";
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
  const [themeIcon, setThemeIcon] = useState(`${sunny}`);
  const [isDark, setIsDark] = useState(false);

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "true");
      setThemeIcon(`${moon}`);
      setOptions(DARK_OPTIONS);
    } else {
      localStorage.removeItem("darkMode");
      setThemeIcon(`${sunny}`);
      setOptions(LIGHT_OPTIONS);
      setIsDark(false);
    }
  };

  useIonViewDidEnter(() => {
    setInterval(() => {
      getChartData();
      getCurrencyData();
    }, 180000);

    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      document.body.classList.add("dark");
      setIsDark(!isDark);
      setThemeIcon(`${moon}`);
      setOptions(DARK_OPTIONS);
    }
  });

  return (
    <>
      <Menu
        themeHandler={toggleDarkModeHandler}
        themeIcon={themeIcon}
        isDark={isDark}
      />
      <IonPage id="main-content">
        <IonHeader>
          <Navbar />
        </IonHeader>
        <IonContent>
          <Header currency={currency} logo={logo} slcChange={slcChange} />
          <div className="home-section-line"></div>
          <div className="main-wrapper">
            <Chart options={options} />
            <div className="home-section-line"></div>
            <div className="home-wrapper">
              <CurrencyInfo
                symbol={symbol}
                price={price}
                price24h={price24h}
                volume={volume}
              />
              <div className="home-section-line"></div>
              <Converter price={price} />
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
