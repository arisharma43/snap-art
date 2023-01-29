import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";

const videoConstraints = {
  witdh: 250,
  height: 400,
  facingMode: "user",
};

function WebCamCapture() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();

  //useCallback(): if called again, doesn't need to do anything just recall
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
  }, [webcamRef]);

  return (
    <div class="WebCamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        width={videoConstraints.width}
        screenshotFormat="image/jpeg"
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedIcon
        className="webCamCapture_button"
        onClick={capture}
        fontSize="large"
      />
      {/* <img src={capture.imageSrc} alt="Capture" /> */}
    </div>
  );
}

export default WebCamCapture;
