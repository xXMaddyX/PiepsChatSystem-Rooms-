<script setup lang="ts">
import chat from '../assets/Chat.vue'
import userList from '../assets/ChatUserList.vue'
import chatInput from '../assets/ChatInput.vue'

</script>


<template>
    <div class="body">
        <div class="main">
            <div class="user-list">
                <userList />
            </div>
            <div class="chat">
                <chat />
            </div>
        </div>
        <div class="chat-inp">
            <chatInput />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.body {
    display: flex;
    flex-direction: column;
    .main {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-bottom: 20px;
        .user-list {
            width: 25%;
            background-color: rgb(170, 170, 170);
            border: 1px solid black;
            border-left: none;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            box-shadow: 0px 2px 8px;
        }
        .chat {
            width: 100%;
            background-color: rgb(170, 170, 170);
            border: 1px solid black;
            border-right: none;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            box-shadow: 0px 2px 8px;
        }
    }
    .chat-inp {
        display: flex;
        flex-direction: column;
    }
}
</style>