import { reactive } from "vue";
import { io, Socket } from 'socket.io-client'
import { chatRooms } from './varStore'


let socketIo: Socket | null = null;

export const sockData = reactive({
    inputMessage: "" as any,
    

    methods: {
        connectToServer(actualRoom: string) {
            socketIo = io(actualRoom);  
            socketIo.on('update-user', (updatedUserList) => {
                chatRooms.userListData.push(updatedUserList.map((user: any) => user.username));
                console.log(chatRooms.userListData)
            });    
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
            socketIo!.emit('send.message', sendtext);
        },
        updateUserName() {
            if (socketIo) {
                socketIo!.disconnect()
                socketIo!.connect()
                socketIo!.emit('send-username', chatRooms.username)
                chatRooms.userNameWindowToggle = false;
            }
        },
    }
});