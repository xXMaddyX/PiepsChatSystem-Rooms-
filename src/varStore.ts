import { reactive } from "vue";

export const chatRooms = reactive({
    actualRoom: "/",
    roomNrDisplay: "Main Room",
    username: 'User',

    chatRoomUrls: {
        mainRoom: "http://127.0.0.1:5000/",
        room1: "http://127.0.0.1:5000/room1",
        room2: "http://127.0.0.1:5000/room2",
        room3: "http://127.0.0.1:5000/room3",
    },
    methods: {
        changeChatroom(choice: string, route: string) {
            chatRooms.roomNrDisplay = choice
            chatRooms.actualRoom = route
        },

    }
});

export const navVars = reactive({
    navBarBtn: false,

    methods: {
        navigateToBlank(url: string) {
            window.open(url, '_blank');
        },
        toggleRoomBtn() {
            navVars.navBarBtn = !navVars.navBarBtn
        }
    },
    
});

//TO DO
export const chatFunctions = reactive({
    charVars: {
        sendMessage: "",
        getMessage: [],
    },
    methods: {
        async fetchMsg() {
            const responce = await fetch(chatRooms.actualRoom)
            const message = responce.json()
        },
        sendMsg() {

        }

    }
})