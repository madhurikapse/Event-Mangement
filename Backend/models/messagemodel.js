

const messages = []; 

class Message {
    static create(messageContent) {
        const message = { id: messages.length + 1, content: messageContent };
        messages.push(message);
        return message;
    }
}

module.exports = Message;
