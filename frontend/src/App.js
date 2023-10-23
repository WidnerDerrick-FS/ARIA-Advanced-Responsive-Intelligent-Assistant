import React, { useState } from 'react';
import './App.css';
import avatar from './assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPhone, faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isMicrophoneMuted, setIsMicrophoneMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [callStatus, setCallStatus] = useState('idle'); // Can be "idle", "calling", or "inCall"
  
  const toggleMicrophone = () => {
    setIsMicrophoneMuted(!isMicrophoneMuted);
  };

  const toggleVideo = () => {
    if (isVideoEnabled) {
      setIsVideoEnabled(false);
    }
  };

  const toggleCall = () => {
    if (callStatus === 'inCall') {
      setCallStatus('idle');
    } else if (callStatus === 'idle') {
      setCallStatus('calling');
      setTimeout(() => {
        setCallStatus('inCall');
      }, 5000); // 2-second delay for "Calling..."
    }
  };

  const getCallText = () => {
    switch(callStatus) {
      case 'calling': return 'Calling...';
      case 'inCall': return 'In call with ARIA';
      default: return 'Call ARIA';
    }
  };

  const getCallButtonClass = () => {
    return (callStatus === 'calling' || callStatus === 'inCall') ? 'end-btn' : 'call-btn';
  };
  

  return (
    <div className="app-container">
      <div className="avatar-container">
        <img src={avatar} alt="User Avatar" className={`avatar ${isVideoEnabled ? '' : 'blurred'}`} />
      </div>
      <span className="call-text">{getCallText()}</span>
      <div className="call-actions">
        <div className={`action-btn icon${isVideoEnabled ? '' : ' disabled'}`}
          onClick={toggleVideo}
          style={{ cursor: isVideoEnabled ? 'pointer' : 'not-allowed', opacity: isVideoEnabled ? 1 : 0.5 }}>
          <FontAwesomeIcon icon={faVideo} />
        </div>
        <div className={`action-btn ${getCallButtonClass()}`} onClick={toggleCall}>
          <FontAwesomeIcon icon={faPhone} className='icon'/>
        </div>
        <div className={`action-btn microphone ${isMicrophoneMuted ? 'muted' : ''}`} onClick={toggleMicrophone}>
          <FontAwesomeIcon icon={isMicrophoneMuted ? faMicrophoneSlash : faMicrophone} className='icon'/>
        </div>
      </div>
    </div>
  );
}

export default App;
