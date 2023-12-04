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
import { arrowBack } from "ionicons/icons";
import "../styles/Menu.scss";

interface MenuProps {
  themeHandler: () => void;
  themeIcon: string;
  isDark: boolean;
}

const Menu: React.FC<MenuProps> = ({ themeHandler, themeIcon, isDark }) => {
  const checkedToggle = { checked: true };

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
              <IonIcon slot="end" icon={themeIcon} />
              <IonToggle
                slot="end"
                name="darkMode"
                aria-label="theme"
                onIonChange={themeHandler}
                {...(isDark && checkedToggle)}
              />
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
