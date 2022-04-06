import { IonPage, IonContent} from "@ionic/react";
import React, {useEffect, useState} from "react";
import "./Loading.scss";
import Home from './Home';
import { url } from "inspector";

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