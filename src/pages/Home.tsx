import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton, IonList, IonItem, IonSelect, IonSelectOption, IonText, IonImg, IonInput} from '@ionic/react';
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
      <IonContent>
      <IonList>
        <IonItem>
          <IonSelect placeholder="Select Currency">
            <IonSelectOption value="Dollar">Dollars</IonSelectOption>
            <IonSelectOption value="Cordoba">Cordobas</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>

      <IonImg src={"./Images/Graph.png"}></IonImg>
      <div>
      <IonText>Miners Revenue</IonText>
      <IonText> $60000</IonText>
      </div>
      <div>
      <IonText>Bitcoin Price</IonText>
      <IonText> $35000</IonText>
      </div>
      <div>
      <IonText>Convert</IonText>
      </div>
      <IonInput placeholder="USD"></IonInput>
      <IonInput placeholder="BTC"></IonInput>

      </IonContent>
    </IonPage>
  );
};

export default Home;

