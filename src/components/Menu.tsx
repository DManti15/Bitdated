import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import '../styles/Menu.scss';

const Menu: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar className="menu-toolbar">
            <IonTitle className="menu-toolbar-title">Bitdated</IonTitle>
            <IonMenuToggle slot="end">
              <IonButton className="back-btn">
                <IonIcon icon={arrowBack} className="back-icon"></IonIcon>
              </IonButton>
            </IonMenuToggle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
