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

  return (
    <div>
      <h1>React chat</h1>
      <MessagesList messagesData={messagesData} />
      <FormChat 
        setMessagesData={setMessagesData} 
        messagesData={messagesData}
      />
    </div>
  )
}

export default App;