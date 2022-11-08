import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import CallIcon from "@mui/icons-material/Call";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Testing Chat</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />

        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQFkT3w6c3ZqZA/profile-displayphoto-shrink_800_800/0/1644951162483?e=1673481600&v=beta&t=GMlQaLySIl0_yOMY17pyGfhEW0MXf9H8gwGpebT8dJw"/>
        <div className="sidebar__profileInfo">
          <h3>LegendArtur</h3>
          <p>#goofy</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
