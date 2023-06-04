<template>
  <base-layout :pageTitle='loadedMemory ? loadedMemory.title : "loading...."' previousPageLink="/memories">
    <h2 v-if="!loadedMemory">This page is loading...Please wait</h2>
    <ion-content v-else>
      <ion-img :src="loadedMemory.image" :alt="loadedMemory.title"></ion-img>
      <h1 class="ion-text-center">{{loadedMemory.title}}</h1>
      <h3 class="ion-text-center">{{loadedMemory.description}}</h3>
    </ion-content>
  </base-layout>
</template>

<script>
import {IonImg,IonContent} from '@ionic/vue';
export default {
  data(){
    return({
      memoryId: this.$route.params.id,
    })
  },
  watch:{
      $route(currentRoute){
          this.memoryId = currentRoute.params.id;
      }
  },
  computed:{
    loadedMemory(){
      return this.$store.getters.memory(this.memoryId);
    }
  },
  components:{
    IonImg,
    IonContent
  },
};
</script>
