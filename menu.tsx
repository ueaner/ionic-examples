import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonItem, IonRouterOutlet } from '@ionic/react';

export const MenuExample: React.FC = () => (
  <>
    <IonMenu side="start" menuId="first">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonPage><IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent></IonPage>
    </IonMenu>

    <IonMenu side="start" menuId="custom" className="my-custom-menu">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Custom Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonPage><IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent></IonPage>
    </IonMenu>

    <IonMenu side="end" type="push">
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>End Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonPage><IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent></IonPage>
    </IonMenu>
    <IonRouterOutlet></IonRouterOutlet>
  </>
);
