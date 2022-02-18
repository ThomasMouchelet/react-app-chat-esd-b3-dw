import { useState } from "react";
import FormChat from "./components/FormChat";
import MessagesList from "./components/MessagesList";

const messagesFixtures = [
  {
      pseudo: "User pseudo",
      message: "Lorem ipsum"
  },
  {
      pseudo: "User pseudo",
      message: "Lorem ipsum"
  },
  {
      pseudo: "User pseudo",
      message: "Lorem ipsum"
  },
  {
      pseudo: "User pseudo",
      message: "Lorem ipsum"
  }
]

function App() {
  const [messagesData, setMessagesData] = useState(messagesFixtures)

  const deleteMessage = (index) => {
    messagesData.splice(index, 1)
    console.log(messagesData)

    setMessagesData(messagesData)
  }

  return (
    <div>
      <h1>React chat</h1>
      <MessagesList deleteMessage={deleteMessage} messagesData={messagesData} />
      <FormChat
        setMessagesData={setMessagesData} 
        messagesData={messagesData}
      />
    </div>
  )
}

export default App;