<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required  v-model="enteredTitle"/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" required v-model="enteredImageUrl" />
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
import { IonList, IonItem, IonTextarea, IonLabel,IonInput ,IonButton} from "@ionic/vue";
export default {
  emits:['save-memory'],
  components: {
    IonList,
    IonLabel,
    IonTextarea,
    IonItem,
    IonButton,
    IonInput,
  },
  data(){
    return{
      enteredTitle: '',
      enteredImageUrl:'',
      enteredDescription:'',
    };
  },
  methods:{
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
