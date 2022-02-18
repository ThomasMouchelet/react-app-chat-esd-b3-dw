import Message from "./Message"

function MessagesList ({messagesData, deleteMessage}){
    return (
      <div className="messages-list">
          {messagesData.map((message, index) => <Message key={index} deleteMessage={deleteMessage} message={message} index={index} />)}
      </div>
    )
}

export default MessagesList;