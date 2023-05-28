<template>
  <base-layout pageTitle='All memories'>
      <ion-list>
        <ion-item router-link='/memories/1'> Ram </ion-item>
        <ion-item> Sita </ion-item>
        <ion-item> Shiv </ion-item>
        <ion-item> Vishnu </ion-item>
      </ion-list>
  </base-layout>
</template>

<script>
import {
  IonList,
  IonItem,
} from "@ionic/vue";
export default {
  components: {
    IonList,
    IonItem,
  },
};
</script>
