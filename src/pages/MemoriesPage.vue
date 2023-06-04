<template>
  <base-layout pageTitle='All memories'>
      <template v-slot:action-end>
        <ion-button router-link="/memories/add">
          <ion-icon slot="icon-only" :icon="add"></ion-icon>
        </ion-button>        
      </template>
      <ion-list>
        <ion-item v-for="memory in memories" :router-link='`/memories/${memory.id}`' :key='memory.id'>
         <ion-thumbnail slot="start"> <ion-img :src="memory.image" :alt="memory.title"></ion-img></ion-thumbnail>
          <ion-label> 
         {{memory.title}} 
          </ion-label>
        </ion-item>
      </ion-list>
  </base-layout>
</template>

<script>
import {
  IonList,
  IonItem,
  IonImg,
  IonLabel,
  IonThumbnail,
  IonIcon,
  IonButton
} from "@ionic/vue";

import {add} from 'ionicons/icons';

export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonLabel,
    IonThumbnail,
    IonButton,
    IonIcon
  },
  data(){
    return { add };
  },
  computed:{
    memories(){
      return this.$store.getters.memories
    }
  },
  
};
</script>
