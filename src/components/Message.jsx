function Message ({message}){
    return (
        <div className="message">
            <strong>{message.pseudo} :</strong>
            <span>{message.message}</span>
            <button>DELETE</button>
        </div>
    )
}

export default Message;