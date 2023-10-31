<script setup lang="ts">
        
</script>


<template>
    <div class="content">
        <ul>
            <li>Room1</li>
            <li>Room2</li>
            <li>Room3</li>
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
        background: rgb(151, 151, 151);
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
            cursor: pointer;
        }
    }
}
</style>