import {
  IonButton,
  IonIcon,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { menu } from "ionicons/icons";
import "../styles/Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <>
      <IonToolbar className="main-toolbar">
        <IonMenuToggle slot="start">
          <IonButton className="toolbar-button">
            <IonIcon icon={menu} className="toolbar-icon"></IonIcon>
          </IonButton>
        </IonMenuToggle>
        <div className="toolbar-section-line" slot="start"></div>
        <IonTitle className="toolbar-text">Bitdated</IonTitle>
      </IonToolbar>
    </>
  );
};

export default Navbar;
