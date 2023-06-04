<template>
  <base-layout
    pageTitle="Save your memory"
    previousPageLink="/memories"
  >
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
    </base-layout>
</template>

<script>
import CreateMemoryForm from '../Components/form/CreateMemoryForm.vue';
export default {
    components:{
        CreateMemoryForm
    },
    methods:{
      saveMemory(memoryData){
        this.$store.dispatch('addMemory',memoryData);
        this.$router.replace('/memories');
      }
    }
}
</script>
