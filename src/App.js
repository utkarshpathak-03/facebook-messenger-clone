import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  // We are using state instead of variables becoz variables change their values
  // after the refresh but state dont .
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Uttu", message: "Hey baby :-)" },
    { username: "Akku", message: "Ha Utta ;-*" },
  ]);
  const [userName, setUserName] = useState();
  console.log(messages);

  useEffect(() => {
    // once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setUserName(prompt("Please enter username"));
  }, []);

  const sendMessage = (event) => {
    //all the logic to send a message goes
    // Form having the default property , on submitting it will
    // It will automatically refresh

    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, { username: userName, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Facebook Messenger</h1>
      <h2>Welcome {userName}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={userName} message={message} />
      ))}
      {/* Input Field */}
      {/* Button */}
      {/* Messages */}
    </div>
  );
}

export default App;
