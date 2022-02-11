import Message from "./Message"

function MessagesList ({messagesData}){
    return (
      <div className="messages-list">
          {messagesData.map(message => <Message message={message} />)}
      </div>
    )
}

export default MessagesList;