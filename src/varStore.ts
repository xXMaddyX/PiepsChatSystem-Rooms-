import { reactive } from "vue";
import { sockData } from "./socket";
import { io } from 'socket.io-client';


export const chatRooms = reactive({
    actualRoom: "http://127.0.0.1:5000",
    roomNrDisplay: "Main Room",
    username: 'User',
    userNameWindowToggle: false,
    greetingMsg: "Willkommen auf Piep´s Server, wähle einen Chatroom um zu chatten!!!",

    chatRoomUrls: {
        mainRoom: "http://127.0.0.1:5000",
        room1: "http://127.0.0.1:5001",
        room2: "http://127.0.0.1:5002",
        room3: "http://127.0.0.1:5003",
    },
    methods: {
        changeChatroom(choice: string, route: string) {
            sockData.methods.disconnect();
            chatRooms.roomNrDisplay = choice;
            chatRooms.actualRoom = route;
            sockData.methods.connectToServer(chatRooms.actualRoom);
        },
        toggleUsernameWindow() {
            chatRooms.userNameWindowToggle = !chatRooms.userNameWindowToggle;
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