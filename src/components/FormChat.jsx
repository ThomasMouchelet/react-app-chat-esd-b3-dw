import { useState } from "react"

function FormChat({setMessagesData, messagesData}){
    const [message, setMessage] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Click form')
        setMessagesData([
            ...messagesData,
            {pseudo: "Pseudo from handleSubmit", message: "Message from handleSubmit"}
        ])
    }

    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget
        console.log(value, name)
    }

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='pseudo' onChange={handleChange} name="pseudo" />
        <input type="text"  placeholder='message' />
        <input type="submit" />
      </form>
    )
  }

export default FormChat;