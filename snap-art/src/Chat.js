import React from "react";
import "./Chat.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
	return (
		<div className="chat">
			<AccountCircleOutlinedIcon className="chat_avatar" src={profilePic} />
			<div className="chat_info">
				<h4>{username}</h4>
				<p>Tap to view - {new Date(timestamp?.toString().toUTCString())}</p>
			</div>
		</div>
	);
}

export default Chat;
