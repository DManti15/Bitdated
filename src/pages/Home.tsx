import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonButtons, IonMenuButton, IonIcon,IonGrid, IonCol, IonRow } from '@ionic/react';
import DropTitleContainer from '../components/DropTitleContainer';
import './Home.scss';

const Home: React.FC = () => {

  const currencyName = 'Default';

  
  function currentChange() {
    var select = document.querySelector('#currency');
    console.log(select)
    
  }

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar class="titleHome">
          <div className="titleContainer">
          <IonIcon name="menu-outline" class="menuS"></IonIcon>
          <IonTitle class="titleHomeText">Home</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="dropContainer">
          <div className="currentTitle"> 
            <img src="asd"></img>
            <h4>{currencyName}</h4>
          </div>
          <div className="dropDown">
            <select id='currency' onChange={currentChange}>
              <option value='0'>Bitcoin</option>
              <option value='1'>Ethereum</option>
            </select>
          </div>
      </div>
    </IonContent>
    </IonPage>
  );
};

export default Home;
