<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required  v-model="enteredTitle"/>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="" /> 
        </ion-thumbnail>
        <ion-button fill="clear" type="button" @click="takephoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take a pic
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredDescription" />
      </ion-item>
    </ion-list>
    <ion-button expand="full" type="submit">Save</ion-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonTextarea, IonLabel,IonInput ,IonButton,IonThumbnail,IonIcon} from "@ionic/vue";
import {camera} from "ionicons/icons";
export default {
  emits:['save-memory'],
  components: {
    IonList,
    IonLabel,
    IonTextarea,
    IonItem,
    IonButton,
    IonInput,
    IonThumbnail,
    IonIcon
  },
  data(){
    return{
      enteredTitle: '',
      enteredImageUrl:'',
      enteredDescription:'',
      camera
    };
  },
  methods:{
    takephoto(){

    },
    submitForm(){
      const memoryData={
        title: this.enteredTitle,
        imageUrl: this.enteredImageUrl,
        description: this.enteredDescription,
      };
      this.$emit('save-memory',memoryData);
    }
  }
}
</script>
