import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import { menu } from 'ionicons/icons'
import './Home.scss';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill="clear">
            <IonIcon icon={menu}></IonIcon>
          </IonButton>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
