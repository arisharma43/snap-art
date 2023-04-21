import React, { useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ChatBubbleOutline } from "@mui/icons-material";
import { db } from "./firebase";
import { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Chat from "./Chat";
import "./Chats.css" 

function Chats() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data.map(),
					}))
				)
			);
	}, []);

	return (
		<div
			className="
    chats"
		>
			<div className="chats_header">
				<AccountCircleOutlinedIcon className="chats_avatar" />
				<div className="chats_search">
					<SearchOutlinedIcon />
					<input placeholder="Friends" type="text" />
				</div>
				<ChatBubbleOutline className="chats_chatIcon" />
			</div>
			<div className="chat_posts">
				{posts.map(
					({
						id,
						data: { profilePic, username, timestamp, imageUrl, read },
					}) => (
						<Chat
							key={id}
							id={id}
							username={username}
							timestamp={timestamp}
							imageUrl={imageUrl}
							read={read}
							profilePic={profilePic}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default Chats;
