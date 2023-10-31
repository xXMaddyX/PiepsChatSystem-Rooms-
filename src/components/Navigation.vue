<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Transition } from 'vue'
import { navVars } from '../varStore'
import { RouterLink } from 'vue-router';
import navDrop from '../assets/NavigationDropdown.vue'

const bodyRef = ref<HTMLElement | null>(null);

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const handleClickOutside = (event: MouseEvent) => {
  if (bodyRef.value && !bodyRef.value.contains(event.target as Node)) {
    navVars.navBarBtn = false;
  }
};
        
</script>


<template>
    <div class="body" ref="bodyRef">
        <div class="nav-bar">
            <h2>Piep´s Chat</h2>
            <ul>
                <li><RouterLink :to="'/'" class="links">Refresh</RouterLink></li>
                <li @click.self="navVars.methods.toggleRoomBtn">Button</li>
            </ul>
        </div>
        <Transition name="room-win">
        <navDrop class="room-select" v-show="navVars.navBarBtn"/>
        </Transition>
        
    </div>
</template>


<style lang="scss" scoped>
.body {
    display: flex;
    flex-direction: column;
    .nav-bar {
        display: flex;
        flex-direction: row;
        background: linear-gradient(90deg, #000 0%, #ff9100 100%);
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 2px 8px black;
        h2 {
            padding-left: 5%;
            color: white;
        }
        ul {
            display: flex;
            flex-direction: row;
            list-style: none;
            height: 70px;
            align-items: center;
            gap: 20px;
            padding-right: 50px;
            li {
                font-size: 25px;
                font-weight: 600;
                cursor: pointer;
                transition: .3s;
                &:hover {
                    color: white;
                    text-shadow: 2px 2px 8px black;
                }
            }
        }
    }
    .links {
        text-decoration: none;
        color: #000;
        transition: .3s;
        &:hover {
            color: white;
        }
    }
    .room-select {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .room-win-enter-from, .room-win-leave-to {
        opacity: 0;
    }
    .room-win-enter-to, .room-win-leave-from {
        opacity: 1;
    }
    .room-win-enter-active, .room-win-leave-active {
        transition: opacity 0.5s ease-in-out;
    }

}

</style>