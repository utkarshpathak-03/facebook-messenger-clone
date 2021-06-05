import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "../css/Message.css";

function Message({ username, message }) {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message_user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography component="h2">
            {message.username}:{message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
