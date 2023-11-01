<script setup lang="ts">
import { chatRooms } from '../varStore';
import navigation from '../components/Navigation.vue'
import chatContent from '../components/ChatContent.vue'


</script>

<template>
  <div class="home-content">

    <div class="header">
      <navigation />
      <h3>{{ chatRooms.roomNrDisplay }}</h3>
    </div>

    <div class="center">
      <chatContent />
    </div>

    <div class="footer">
  
    </div>

  </div>
</template>


<style lang="scss" scoped>
.home-content {
  display: flex;
  flex-direction: column;
  flex: 3;
  background-color: gray;
  min-height: 100vh;
  .header {
    flex: 1;
    margin-bottom: 5px;
    text-align: center;
  }
  h3 {
    margin-top: 5px;
  }

}

</style>