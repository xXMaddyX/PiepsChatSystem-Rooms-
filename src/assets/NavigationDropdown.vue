<script setup lang="ts">
import { chatRooms } from '../varStore'
</script>


<template>
    <div class="content">
        <ul>
            <li @click="chatRooms.methods.changeChatroom('Main Room', chatRooms.chatRoomUrls.mainRoom)">Main</li>
            <li @click="chatRooms.methods.changeChatroom('Room 1', chatRooms.chatRoomUrls.room1)">Room1</li>
            <li @click="chatRooms.methods.changeChatroom('Room 2', chatRooms.chatRoomUrls.room2)">Room2</li>
            <li @click="chatRooms.methods.changeChatroom('Room 3', chatRooms.chatRoomUrls.room3)">Room3</li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
.content {
    ul {
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 100px;
        padding-right: 100px;
        list-style: none;
        background: linear-gradient(90deg, #000 0%, #ff9100 100%);
        border: 1px solid black;
        box-shadow: 2px 2px 8px black;
        border-radius: 20px;
        li{
            font-size: 25px;
            padding: 10px;
            border: 1px solid black;
            margin: 20px;
            font-weight: 600;
            border-radius: 20px;
            box-shadow: 2px 2px 8px black;
            color: white;
            text-shadow: 2px 2px 8px gray;
            cursor: pointer;
            transition: .3s;
            &:hover {
                background-color: #ff910079;
            }
        }
    }
}
</style>