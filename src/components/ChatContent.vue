<script setup lang="ts">
import chat from '../assets/Chat.vue'
import userList from '../assets/ChatUserList.vue'
import chatInput from '../assets/ChatInput.vue'
import changeUserName from '../assets/ChangeUserName.vue'
import { chatRooms } from '../varStore'

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
        <Transition name="name-change">
        <div v-show="chatRooms.userNameWindowToggle" class="changeName">
            <changeUserName />
        </div>
        </Transition>
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
    .changeName {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .name-change-enter-from, .name-change-leave-to {
        opacity: 0;
    }
    .name-change-enter-to, .name-change-leave-from {
        opacity: 1;
    }
    .name-change-enter-active, .name-change-leave-active {
        transition: opacity 0.5s ease-in-out;
    }
}
</style>