import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuToggle,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";

const Menu: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar className="menu-toolbar">
            <IonTitle className="toolbar-title">Bitdated</IonTitle>
            <IonMenuToggle slot="end">
              <IonButton className="back-btn">
                <IonIcon icon={arrowBack} className="back-icon"></IonIcon>
              </IonButton>
            </IonMenuToggle>
          </IonToolbar>
        </IonHeader>
        <IonContent>Hello!</IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
