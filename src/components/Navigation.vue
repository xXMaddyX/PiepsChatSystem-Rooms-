<script setup lang="ts">
import { navVars } from '../varStore'
import { RouterLink } from 'vue-router';
import navDrop from '../assets/NavigationDropdown.vue'
        
</script>


<template>
    <div class="body">
        <div class="nav-bar">
            <h2>Piep´s Chat</h2>
            <ul>
                <li><RouterLink :to="'/'" class="links">Refresh</RouterLink></li>
                <li @click="navVars.methods.navigateToBlank('https://www.freelance-archery.de/')" class="links">Shop</li>
                <li @click="navVars.methods.toggleRoomBtn">Button</li>
            </ul>
        </div>
        <div class="room-select">
            <navDrop v-show="navVars.navBarBtn"/>
        </div>
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
            }
        }
    }
    .links {
        text-decoration: none;
        color: #000;
    }
    .room-select {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}

</style>