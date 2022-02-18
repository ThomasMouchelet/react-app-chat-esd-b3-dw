import Message from "./Message"

function MessagesList ({messagesData}){
    return (
      <div className="messages-list">
          {messagesData.map((message, index) => <Message key={index} message={message} />)}
      </div>
    )
}

export default MessagesList;