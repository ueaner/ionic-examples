import React from 'react';
import { IonSpinner, IonContent, IonPage } from '@ionic/react';

export const SpinnerExample: React.FC = () => (
  <IonPage><IonContent>
    {/*-- Default Spinner --*/}
    <IonSpinner />

    {/*-- Lines --*/}
    <IonSpinner name="lines" />

    {/*-- Lines Small --*/}
    <IonSpinner name="lines-small" />

    {/*-- Dots --*/}
    <IonSpinner name="dots" />

    {/*-- Bubbles --*/}
    <IonSpinner name="bubbles" />

    {/*-- Circles --*/}
    <IonSpinner name="circles" />

    {/*-- Crescent --*/}
    <IonSpinner name="crescent" />

    {/*-- Paused Default Spinner --*/}
    <IonSpinner paused />
  </IonContent></IonPage>
);
