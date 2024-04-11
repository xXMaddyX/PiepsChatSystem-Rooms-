<script setup lang="ts">
import { chatRooms } from '../varStore';
import { sockData } from '../socket';
</script>


<template>
    <div class="content">
        <input v-model="chatRooms.username" @keyup.enter="sockData.methods.updateUserName" id="username-input" type="text" placeholder="Gib deinen Nutzername ein">
        <button @click="sockData.methods.updateUserName" id="username-input-button">Ok</button>
    </div>
</template>


<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 2px 2px 3px black;
    background-color: #ff910080;
    padding: 30px;
    input {
        padding: 10px;
        font-size: 18px;
    }
    button {
        margin-top: 5px;
        padding: 5px;
        font-size: 15px;
    }
}
</style>
