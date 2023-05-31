<template>
  <base-layout :pageTitle='loadedMemory ? loadedMemory.title : "loading...."' previousPageLink="/memories">
    <h2 v-if="!loadedMemory">This page is loading...Please wait</h2>
    <h2 v-else>This page is successfully loaded</h2>
  </base-layout>
</template>

<script>
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
};
</script>
