import { reactive } from "vue";

export const chatRooms = reactive({
    actualRoom: "/",
    roomNrDisplay: "Main Room",

    chatRoomUrls: {
        mainRoom: "http://127.0.0.1:5000/",
        room1: "http://127.0.0.1:5000/room1",
        room2: "http://127.0.0.1:5000/room2",
        room3: "http://127.0.0.1:5000/room3",
    },
    methods: {
        changeChatroom(choice: any) {
            chatRooms.actualRoom = choice
        }

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