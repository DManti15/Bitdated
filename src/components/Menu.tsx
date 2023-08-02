import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack, moon, sunny } from "ionicons/icons";
import { useState } from "react";
import { DARK_OPTIONS, LIGHT_OPTIONS } from "../constants/chartOptions";
import "../styles/Menu.scss";

interface MenuProps {
  setOptions: React.Dispatch<React.SetStateAction<{}>>;
}

const Menu: React.FC<MenuProps> = ({ setOptions }) => {
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
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar className="menu-toolbar">
            <IonTitle className="menu-toolbar-title">Bitdated</IonTitle>
            <IonMenuToggle slot="end">
              <IonButton className="back-btn">
                <IonIcon icon={arrowBack} className="back-icon" />
              </IonButton>
            </IonMenuToggle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList className="menu-list">
            <IonItem lines="none" color="none">
              <IonLabel className="theme-label">Change theme</IonLabel>
              <IonIcon slot="end" icon={darkIcon} />
              <IonToggle
                slot="end"
                name="darkMode"
                aria-label="theme"
                onIonChange={toggleDarkModeHandler}
              />
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
