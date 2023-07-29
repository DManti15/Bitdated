import { IonButton, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { menu } from "ionicons/icons";
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <>
      <IonToolbar className="mainToolBar">
        <IonButton className="toolbarButton" slot="start">
          <IonIcon icon={menu} className="toolbarIcon"></IonIcon>
        </IonButton>
        <div className="toolbarSectionLine" slot="start"></div>
        <IonTitle className="toolbarText">Bitdated</IonTitle>
      </IonToolbar>
    </>
  );
};

export default Navbar;
