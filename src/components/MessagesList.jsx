import Message from "./Message"

function MessagesList ({messagesData, setMessagesData}){
    return (
      <div className="messages-list">
          {messagesData.map((message, index) => 
            <Message 
              key={index} 
              setMessagesData={setMessagesData} 
              messagesData={messagesData}
              message={message}
              index={index} />
          )}
      </div>
    )
}

export default MessagesList;