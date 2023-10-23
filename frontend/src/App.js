import React, { useState } from 'react';
import './App.css';
import avatar from './assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPhone, faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';

function App() {
  // State variables to track microphone and video states
  const [isMicrophoneMuted, setIsMicrophoneMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false); // Set to false initially

  // Function to toggle the microphone icon
  const toggleMicrophone = () => {
    setIsMicrophoneMuted(!isMicrophoneMuted);
  };

  // Function to toggle the video icon and disable it
  const toggleVideo = () => {
    // Check if video is enabled, and only toggle if it's enabled
    if (isVideoEnabled) {
      setIsVideoEnabled(false);
    }
  };

  return (
    <div className="app-container">
      <div className="avatar-container">
        <img src={avatar} alt="User Avatar" className={`avatar ${isVideoEnabled ? '' : 'blurred'}`} />
      </div>
      <span className="call-text">In call with ARIA</span>
      <div className="call-actions">
        <div className="action-btn">
          <FontAwesomeIcon
            icon={faVideo}
            className={`icon${isVideoEnabled ? '' : ' disabled'}`}
            onClick={toggleVideo}
            style={{ cursor: isVideoEnabled ? 'pointer' : 'not-allowed', opacity: isVideoEnabled ? 1 : 0.5 }}
          />
        </div>
        <div className="action-btn end-btn">
          <FontAwesomeIcon icon={faPhone} className='icon'/>
        </div>
        <div
          className={`action-btn microphone ${isMicrophoneMuted ? 'muted' : ''}`}
          onClick={toggleMicrophone}
        >
          {/* Toggle between microphone and microphone-slash icons based on state */}
          <FontAwesomeIcon icon={isMicrophoneMuted ? faMicrophoneSlash : faMicrophone} className='icon'/>
        </div>
      </div>
    </div>
  );
}

export default App;
