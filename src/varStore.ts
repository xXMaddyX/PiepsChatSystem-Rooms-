import { reactive } from "vue";
import { sockData} from "./socket";
import { io } from 'socket.io-client';

export interface ChatMessage {
    username: string;
    message: string;
}

export const chatRooms = reactive({
    actualRoom: "http://127.0.0.1:5000",
    roomNrDisplay: "Main Room",
    username: 'User',
    userNameWindowToggle: false,
    messageList: [] as ChatMessage[],
    userListData: [] as string[],

    chatRoomUrls: {
        mainRoom: "http://127.0.0.1:5000",
        room1: "http://127.0.0.1:5001",
        room2: "http://127.0.0.1:5002",
        room3: "http://127.0.0.1:5003",
    },
    methods: {
        changeChatroom(choice: string, route: string) {
            sockData.methods.disconnect();
            chatRooms.userListData = []
            chatRooms.roomNrDisplay = choice;
            chatRooms.actualRoom = route;
            sockData.methods.connectToServer(chatRooms.actualRoom);
            chatRooms.messageList = []
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