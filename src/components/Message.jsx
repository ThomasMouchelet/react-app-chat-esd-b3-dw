import { AiFillLike } from "react-icons/ai";

function Message ({message, setMessagesData, index, messagesData}){

    const deleteMessage = () => {
        messagesData.splice(index, 1)
        setMessagesData([...messagesData])
    }

    const handleLike = () => {
        
    }

    return (
        <div className="message">
            <strong>{message.pseudo} :</strong>
            <span>{message.message}</span>
            <button onClick={deleteMessage}>DELETE</button>
            <button onClick={handleLike}><AiFillLike /> ({message.likes ? message.likes : "0"})</button>
        </div>
    )
}

export default Message;