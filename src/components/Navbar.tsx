import { IonButton, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { menu } from "ionicons/icons";
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <>
      <IonToolbar className="main-toolbar">
        <IonButton className="toolbar-button" slot="start">
          <IonIcon icon={menu} className="toolbar-icon"></IonIcon>
        </IonButton>
        <div className="toolbar-section-line" slot="start"></div>
        <IonTitle className="toolbar-text">Bitdated</IonTitle>
      </IonToolbar>
    </>
  );
};

export default Navbar;
