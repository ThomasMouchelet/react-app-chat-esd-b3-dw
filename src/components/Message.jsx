import { AiFillLike } from "react-icons/ai";

function Message ({message, setMessagesData, index, messagesData}){

    const deleteMessage = (index) => {
        messagesData.splice(index, 1)
        setMessagesData([...messagesData])
    }

    const handleClick = () => {
        
    }

    return (
        <div className="message">
            <strong>{message.pseudo} :</strong>
            <span>{message.message}</span>
            <button onClick={() => deleteMessage(index)}>DELETE</button>
            <button onClick={handleClick}><AiFillLike /> ({message.likes ? message.likes : "0"})</button>
        </div>
    )
}

export default Message;