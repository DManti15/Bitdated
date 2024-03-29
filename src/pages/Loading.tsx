import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect } from "react";
import "../styles/Loading.scss";

const Loading: React.FC = () => {

    useEffect(() => {
                const timer = setTimeout(() => {
                window.location.href = "/Home"; 
                console.log('This will run after 1 second!')
                }, 4000);
                
                return () => clearTimeout(timer);
    },[]);

    return (
        <IonPage> 
            <IonContent id="backgroundLoading">
            </IonContent>
        </IonPage>
    );
};

export default Loading;