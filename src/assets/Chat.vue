// In deiner Vue-Komponente
<script setup lang="ts">
import { ref, watch } from 'vue';
import { chatRooms } from '../varStore';
import { scrollToBottom } from '../socket'; // oder den korrekten Pfad zu deinem Utility-File

const chatWindowRef = ref<HTMLElement | null>(null);

watch(() => chatRooms.messageList, () => {
  const element = chatWindowRef.value;
  if (element) {
    scrollToBottom(element);
  }
}, {
  deep: true,
});
</script>

<template>
    <div class="chat-window" ref="chatWindowRef">
        <ul v-for="(item, index) in chatRooms.messageList" :key="index" class="chat-log">
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
    flex-wrap: wrap;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px;
    height: calc(100vh - 240px);
    background-color: rgb(151, 151, 151);
    max-width: 100%;
    .chat-log {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      li {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 15px;
        margin-top: 10px;
        background-color: gray;
        background: rgb(199, 199, 199);
        border: 1px solid black;
        border-radius: 20px;
        list-style: none;
        font-weight: 600;
        word-break: break-word;
      }
    }
}
</style>