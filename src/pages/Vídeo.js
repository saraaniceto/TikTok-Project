import React, { useRef, useState } from "react";
import VídeoFooter from "./components/footer/VídeoFooter"
import "./Vídeo.css";
import VideoSidebar from "./components/sidebar/VideoSidebar"

function Vídeo({likes, messages, shares, name, description, music, url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="vídeo">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <VídeoFooter
       name={name}
       description={description}
       music={music}
       />
    </div>
  );
}

export default Vídeo;
