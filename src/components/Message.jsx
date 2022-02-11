function Message ({message}){
    return (
        <div className="message">
            <strong>{message.pseudo} :</strong>
            <span>{message.message}</span>
        </div>
    )
}

export default Message;