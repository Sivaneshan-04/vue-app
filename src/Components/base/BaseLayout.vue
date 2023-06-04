<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button :default-href="previousPageLink"></ion-back-button>
      </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      <ion-buttons slot="end">
        <slot name="action-end"/>
      </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />   
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";

export default {
  props: ["pageTitle","previousPageLink"],

  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
  },
};
</script>
