<script setup lang="ts">
import { chatRooms } from '../varStore';
</script>


<template>
    <div class="chat-window">
        <ul v-for="item in chatRooms.messageList" class="chat-log">
            <li>
            <strong :style="{ color: 'blue' }">{{ item.username }}:</strong>
            <span :style="{ color: 'black' }">{{ item.message }}</span>
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
.chat-window {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px;
    height: calc(100vh - 240px);
    background-color: rgb(151, 151, 151);
    li {
        padding: 15px;
        margin-top: 10px;
        width: fit-content;
        background-color: gray;
        background: rgb(199, 199, 199);
        border: 1px solid black;
        border-radius: 20px;
        list-style: none;
        font-weight: 600;
    }
}
</style>