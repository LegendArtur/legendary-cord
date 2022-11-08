import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PushPinIcon from '@mui/icons-material/PushPin';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MailIcon from '@mui/icons-material/Mail';


function ChatHeader() {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader_hash">#</span>
          Test Channel Name
        </h3>
      </div>

      <div className="chatHeader__right">
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />

        <div className="chatHeader__search">
            <input placeholder="Search" />
            <SearchRoundedIcon />
        </div>

        <MailIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
