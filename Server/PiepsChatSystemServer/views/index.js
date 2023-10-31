//Init Variables
const inputField = document.getElementById('input-field');
const sendButton = document.getElementById('send-button');
const chatLog = document.getElementById('chat-log');
const userList = document.getElementById('user-list');
const socket = io.connect('127.0.0.1:5000');
const userChangeBtn = document.getElementById('user-button');
const userChangeWin = document.querySelector('.user-change');
const userNameInput = document.getElementById('username-input');
const userNameInputBtn = document.getElementById('unsername-input-button');
//------------------------------------------------------------------------

//Username
let clientUserName = 'User';
//------------------------------------------------------------------------

//Load User from Local
const loadUserNameFromLocal = () => {
    if (localStorage.getItem('PiepsChat') === null) {
        console.log('no Username set');
    } else {
        let loadUsername = localStorage.getItem('PiepsChat');
        clientUserName = loadUsername;
    }
};
//------------------------------------------------------------------------

//Send UserName to Server
loadUserNameFromLocal();
socket.emit('send-username', clientUserName)
//------------------------------------------------------------------------

//Stored Data Users and ChatLog
let messageLog = [];
let userListData = [];
//------------------------------------------------------------------------

//Function Event Listener Send Message
const sendMessage = () => {
    let messageText = escapeHTML(inputField.value);
    let message = {clientUserName, message: messageText};
    socket.emit('send-message', message);
    inputField.value = '';
}

//Event Listener Send Button Click and Press Enter
sendButton.addEventListener('click', sendMessage);

//TO DO CHANGE FUNCTION TO NEW UPDATET VERSION <--------------------------------------------------------!!!!!!!!!!!!!!!!!!!!
inputField.addEventListener('keydown', (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
        sendMessage();
        event.preventDefault();
    }
});
//------------------------------------------------------------------------

// Listen for messages from server
socket.on('new-message', (message) => {
    message.clientUserName = escapeHTML(message.clientUserName);
    message.message = escapeHTML(message.message);
    messageLog.push(message);
    diplayTextUserInput(messageLog);
});
//------------------------------------------------------------------------

//Display Chat Messages
const diplayTextUserInput = (messageLog) => {
    const chatLog = document.getElementById('chat-log');
    chatLog.innerHTML = ''; // Leeren des ChatLogs im DOM
    for (const message of messageLog) {
        const newLi = document.createElement('li');

        const userSpan = document.createElement('span');
        userSpan.innerText = message.clientUserName + ': ';
        userSpan.classList.add('blue-text')

        newLi.appendChild(userSpan);
        newLi.innerHTML += '<br>' + message.message;
        
        chatLog.appendChild(newLi);
    }
    chatLog.scrollTop = chatLog.scrollHeight;
}
//------------------------------------------------------------------------

//Display User List
const diplayUserList = (user) => {
    const userListLog = document.getElementById('user-list');
    for (user of user) {
        const newLi = document.createElement('li');
        newLi.innerHTML = user;
        userListLog.appendChild(newLi)
    }
}
//------------------------------------------------------------------------

//Button activator for user Name Change
userChangeBtn.addEventListener('click', () => {
    userChangeWin.classList.add('active')
})

//Button User Name Change Input
userNameInputBtn.addEventListener('click', () => {
    let newUsername = userNameInput.value;
    if (newUsername === '') {
        console.log("Ungültiger Username")
    } else {
        clientUserName = userNameInput.value;
        socket.disconnect();
        socket.connect();
        socket.emit('send-username', clientUserName)
        userNameInput.value = '';
        saveUserNameToLocal();
        userChangeWin.classList.remove('active'); 
    };
    
});
//------------------------------------------------------------------------
//Get Userlist on connect
const getChatLogOnConnect = () => {
    messageLog = []; // Leeren des Arrays
    socket.emit('get-log');
    socket.on('chat-log', (resChatLog) => {
        for (let msg of resChatLog) {
            messageLog.push(msg);
        }
        diplayTextUserInput(messageLog); // Diese Zeile wurde verschoben
    });
};
//------------------------------------------------------------------------

//Save Username To Local
const saveUserNameToLocal = () => {
    localStorage.setItem('PiepsChat', clientUserName);
};
//------------------------------------------------------------------------

//User Listing
// Listen for user list updates from the server
socket.on('update-user', (updatedUserList) => {
    userListData = updatedUserList.map(user => user.username);
    updateUserListDisplay();
});

// Listen for user disconnect updates from the server
socket.on('user-disconnect', (updatedUserList) => {
    userListData = updatedUserList.map(user => user.username);
    updateUserListDisplay();
});

const updateUserListDisplay = () => {
    const userListLog = document.getElementById('user-list');
    
    // Clear previous user list display
    userListLog.innerHTML = '';

    // Loop through userListData and display each user
    for (let user of userListData) {
        const newLi = document.createElement('li');
        newLi.innerText = user;
        userListLog.appendChild(newLi);
    }
};
//------------------------------------------------------------------------

//HTML escapeHTML
const escapeHTML = (str) => {
    return str.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
};


//Function Call
diplayUserList(userListData);
getChatLogOnConnect();