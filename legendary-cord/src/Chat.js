import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RedeemIcon from '@mui/icons-material/Redeem';
import GifBoxIcon from '@mui/icons-material/GifBox';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from "./Message";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat__messages">
        <Message />
      </div>


      
      <div className="chat__input">
        <AddCircleRoundedIcon fontSize="large" />
        <form>
          <input placeholder={"Message #testchannel"} />
          <button className="chat__inputButton" type="submit">Send Message</button>
        </form>

        <div className="chat__inputIcons">
            <RedeemIcon fontSize="large"/>
            <GifBoxIcon fontSize="large"/>
            <FilterFramesIcon fontSize="large"/>
            <EmojiEmotionsIcon fontSize="large"/>
        </div>
      </div>
    </div>
  );
}

export default Chat;
