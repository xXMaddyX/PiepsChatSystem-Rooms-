import { reactive } from "vue";
import { io, Socket } from 'socket.io-client'
import { chatRooms } from './varStore'
import { nextTick } from 'vue';

let socketIo: Socket | null = null;

export const sockData = reactive({
    inputMessage: "" as string,
    

    methods: {
        connectToServer(actualRoom: string) {
            socketIo = io(actualRoom);  
            socketIo.on('update-user', (updatedUserList) => {
                chatRooms.userListData = []
                chatRooms.userListData.push(updatedUserList.map((user: any) => user.username));
                console.log(chatRooms.userListData)
            });
            socketIo.on('user-disconnect', (updatedUserList) => {
                chatRooms.userListData = []
                chatRooms.userListData.push(updatedUserList.map((user: any) => user.username));
            });
            socketIo.on('new-message', (message) => {
                message.clientUserName = message.clientUserName;
                message.message = message.message;
                chatRooms.messageList.push(message);
            });
            socketIo.on('get-msg-on-connect', (messages) => {
                chatRooms.messageList = []
                console.log(messages)
                for (let message of messages) {
                   chatRooms.messageList.push(message) 
                }
                
            }),
            this.getUserListOnConnect()
            this.sendUsernameOnConnect()
            this.getMsgOnConnect()
        },
        disconnect() {
            if (socketIo) {
                socketIo.disconnect();
                socketIo = null;
            }
        },
        sendMessage() {
            const messageText = sockData.inputMessage;
            const sendtext: object = {username: chatRooms.username, message: messageText};
            socketIo!.emit('send-message', sendtext);
            sockData.inputMessage = "";
        },
        updateUserName() {
            if (socketIo) {
                socketIo!.disconnect()
                socketIo!.connect()
                socketIo!.emit('send-username', chatRooms.username)
                chatRooms.userNameWindowToggle = false;
            }
        },
        getUserListOnConnect() {
            socketIo!.emit('get-userlist')
        },
        sendUsernameOnConnect() {
            socketIo!.emit('send-username', chatRooms.username)
        },
        getMsgOnConnect() {
            socketIo!.emit('get-message-on-connect');
        }

    }
});


export function scrollToBottom(element: HTMLElement) {
  nextTick(() => {
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  });
}