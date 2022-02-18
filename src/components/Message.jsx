function Message ({message, deleteMessage, index}){

    return (
        <div className="message">
            <strong>{message.pseudo} :</strong>
            <span>{message.message}</span>
            <button onClick={() => deleteMessage(index)}>DELETE</button>
        </div>
    )
}

export default Message;