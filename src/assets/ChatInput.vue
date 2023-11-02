<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { sockData } from '../socket'

</script>


<template>
    <div class="input-field">
        <div class="input-center">
            <div class="input">
                
                <input v-model="sockData.inputMessage" @keyup.enter="sockData.methods.sendMessage" id="input-field" type="text">
            </div>
            <div class="send-button">
                <button @click="sockData.methods.sendMessage" id="send">Senden</button>
            </div>
        </div>
    </div>
</template>
    

<style lang="scss" scoped>
.input-field {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    min-height: 50px;
    background: linear-gradient(90deg, #000 0%, #ff9100 100%);
    box-shadow: 0px -2px 8px black;
    .input-center {
        display: flex;
        flex-direction: row;
        width: 100%;
        .input {
            display: flex;
            justify-content: center;
            width: 80%;
            padding: 13px;
            padding-right: 10px;
            input {
                background-color: rgba(255, 255, 255, 0.5);
                border-radius: 10px;
                width: 100%;
                padding: 5px;
                font-size: large;
            }

        }
        .send-button {
            display: flex;
            justify-content: center;
            width: 20%;
            padding: 10px;
            padding-right: 10px;
            button {
                background-color: #ffffff8c;
                padding-left: 10px;
                padding-right: 10px;
                border-radius: 10px;
                font-weight: 600;
                font-size: 16px;
            }
        }
    }
}
</style>