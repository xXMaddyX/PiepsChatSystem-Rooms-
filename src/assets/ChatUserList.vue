<script setup lang="ts">
import { chatRooms } from '../varStore'

</script>


<template>
    <div class="user-window">
        <button @click="chatRooms.methods.toggleUsernameWindow">Change Username</button>
        <ol id="user-list">
            <!--TO DO V-For-->
        </ol>
    </div>
</template>



<style lang="scss" scoped>
.user-window {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px;
    height: calc(100vh - 240px);
    background-color: rgb(151, 151, 151);
    button {
        padding: 5px;
        font-size: 18px;
        font-weight: 600;
        border-radius: 20px;
        background: rgb(199, 199, 199);
        box-shadow: 2px 2px 8px black;
        cursor: pointer;
        &:hover {
            background: gray;
        }
    }
    li {
        padding: 5px;
        margin-top: 10px;
        text-align: center;
        background-color: gray;
        background: rgb(199, 199, 199);
        border: 1px solid black;
        border-radius: 20px;
        list-style: none;
        font-weight: 600;
    }

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