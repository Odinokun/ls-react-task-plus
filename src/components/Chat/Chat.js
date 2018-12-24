import React from 'react';
import './Chat.css';
import Message from '../Message/Message';

export class Chat extends React.Component {
    state = { 
        messages: [],
        messageInput: ''
    };

    changeInputMessage = e => {
        this.setState({
            messageInput: e.target.value
        })
        // console.log('Значение поля ввода - ', e.target.value);
    }

    sendMessageOnEnter = e => {
        let {messages, messageInput} = this.state;

        // if (e.which === 13 && e.target.value.length > 0) {
        if (e.key === 'Enter') {
            messages = [...messages, {text: messageInput}]
            this.setState({
                messages: messages, 
                messageInput: ""
            })
        }
    }

    render() {
        let {messages, messageInput} = this.state;
        
        return (
            <div className = "chat">
                <div className = "message-list">
                    <div className = "messages">
                        {messages.map((message, index) => (
                            <Message key={index} text={message.text} />
                        ))}
                    </div>
                </div>

                <input 
                    className = "input-message"
                    value = { messageInput }
                    onChange = { this.changeInputMessage }
                    onKeyPress = { this.sendMessageOnEnter } />
            </div>
        );
    }
}

export default Chat;