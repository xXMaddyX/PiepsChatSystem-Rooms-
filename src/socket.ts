import { reactive } from "vue";
import { io } from 'socket.io-client'
import { chatRooms } from './varStore'


export let socketIo: any;

export const sockData = reactive({
    inputMessage: "" as string,
    

    methods: {
        connectToServer(actualRoom: string) {
            socketIo = io(actualRoom);
        },
        disconnect() {
            if (socketIo) {
                socketIo.disconnect();
                socketIo = null;
            }
        },
        sendMessage(input: string) {
            const messageText = input;
            const sendtext: object = {unsername: chatRooms.username, message: messageText};
            socketIo.emit('send.message', sendtext);
        }
    }
});