import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useNavigate } from "react-router-dom";
import "./WebCamCapture.css";

const videoConstraints = {
	witdh: 250,
	height: 400,
	facingMode: "user",
};

function WebCamCapture() {
	const webcamRef = useRef(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//useCallback(): if called again, doesn't need to do anything just recall
	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		dispatch(setCameraImage(imageSrc));
		navigate("/Preview");
	}, [webcamRef]);

	return (
		<div className="WebCamCapture">
			<Webcam
				audio={false}
				height={videoConstraints.height}
				width={videoConstraints.width}
				screenshotFormat="image/jpeg"
				ref={webcamRef}
				videoConstraints={videoConstraints}
			/>

			<RadioButtonUncheckedIcon
				className="WebCamCapture_button"
				onClick={capture}
				fontSize="large"
			/>
			<img src={capture.imageSrc} alt="Capture" />
		</div>
	);
}

export default WebCamCapture;
