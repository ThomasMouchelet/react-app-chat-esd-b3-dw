import { useState } from "react"

const initialState = {
  pseudo: "",
  message: ""
}

function FormChat({setMessagesData, messagesData}){
  const [messageForm, setMessageForm] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(messageForm.message.length > 1 && messageForm.pseudo.length > 4){
      setMessagesData([
        ...messagesData,
        messageForm
      ])

      setMessageForm(initialState)
    }
  }

  const handleChange = ({currentTarget}) => {
      const {name, value} = currentTarget

      setMessageForm({
        ...messageForm,
        [name]: value
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='pseudo' 
        onChange={handleChange} 
        name="pseudo" 
        value={messageForm.pseudo} />
      <input 
        type="text"  
        placeholder='message' 
        onChange={handleChange} 
        name="message" 
        value={messageForm.message} />
      <input type="submit" />
    </form>
  )
}

export default FormChat;