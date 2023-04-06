import React, { useEffect } from "react";
import "./Preview.css";
import { useSelector } from "react-redux";
import { selectCameraImage } from "./features/cameraSlice";
import { Replay } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { resetCameraImage } from "./features/cameraSlice";
import DownloadIcon from "@mui/icons-material/Download";
import SendIcon from "@mui/icons-material/Send";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import FilterIcon from "@mui/icons-material/Filter";
import { v4 as uuid } from "uuid";
import { db, storage } from "./firebase";
import firebase from "firebase";

function Preview() {
	const cameraImage = useSelector(selectCameraImage);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	var data = String(cameraImage);
	var beginI = data.indexOf(",");
	data = data.substring(beginI);

	useEffect(() => {
		if (!cameraImage) {
			navigate("/", { replace: true });
		}
	}, [cameraImage, navigate]);

	const closePreview = () => {
		dispatch(resetCameraImage());
	};

	const applyFilter = () => {};

	const sendPost = () => {
		const id = uuid();
		const uploadTask = storage
			.ref("posts/${id}")
			.putString(`data:image/jpeg;base64${data}`, "data_url", {
				contentType: "image/jpg",
			});
		uploadTask.on(
			"state_changed",
			null,
			(error) => {
				console.log(error);
			},
			() => {
				storage
					.ref("posts")
					.child(id)
					.getDownloadURL()
					.then((url) => {
						db.collection("posts").add({
							imageUrl: url,
							username: "Ari",
							read: false,
							timestamp: firebase.firestore.FieldValue.serverTimestamp(),
						});
						navigate("/chats", { replace: true });
					});
			}
		);
	};

	return (
		<div className="preview">
			<CloseIcon onClick={closePreview} className="preview_close"></CloseIcon>
			<div className="preview_toolbarRight">
				<DownloadIcon />
				<SendIcon onClick={sendPost} />
				<TextFieldsIcon />
			</div>
			<img src={`data:image/jpeg;base64${data}`} alt="filler text"></img>
			<div onClick={applyFilter} className="preview_footer">
				<h2>Apply filter</h2>
				<FilterIcon fontSize="small" className="preview_filterIcon" />
			</div>
		</div>
	);
}

export default Preview;
