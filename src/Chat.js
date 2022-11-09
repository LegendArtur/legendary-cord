import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RedeemIcon from "@mui/icons-material/Redeem";
import GifBoxIcon from "@mui/icons-material/GifBox";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function Chat() {
  const bottomRef = useRef(null);

  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            user={message.user}
            timestamp={message.timestamp}
            message={message.message}
          />
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="chat__input">
        <div className="chat__inputIcons">
          <AddCircleRoundedIcon fontSize="large" />
        </div>
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={"Message #testchannel"}
          />
          <button
            disabled={!channelId}
            className="chat__inputButton"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <RedeemIcon fontSize="large" />
          <GifBoxIcon fontSize="large" />
          <FilterFramesIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
