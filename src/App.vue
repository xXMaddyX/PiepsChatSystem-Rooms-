<script setup lang="ts">
import { chatRooms } from './varStore';
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { sockData } from './socket';
import { watchEffect } from 'vue';


onMounted(() => {
  sockData.methods.connectToServer(chatRooms.actualRoom)
});

</script>

<template>
  <RouterView />
</template>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
}

::-webkit-scrollbar {
    width: 0px; /* Chrome, Safari, Opera */
    height: 0px;
  }
  
  /* Farbe der Scrollbar */
  ::-webkit-scrollbar-thumb {
    background-color: #88888800; /* Farbe des Scrollbalkens */
  }
  
  /* Farbe bei Mouse-Over */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #55555500; /* Farbe des Scrollbalkens bei Mouse-Over */
  }
  
  /* Hintergrundfarbe der Scrollbar */
  ::-webkit-scrollbar-track {
    background-color: #3a3a3a00; /* Hintergrundfarbe der Scrollbar */
  }
</style>
