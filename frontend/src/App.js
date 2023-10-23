import React from 'react';
import './App.css';
import avatar from './assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPhone, faMicrophone } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app-container">
      <div className="avatar-container">
        <img src={avatar} alt="User Avatar" className="avatar" />
      </div>
      <span className="call-text">In call with May S...</span>
      <div className="call-actions">
        <div className="action-btn">
          <FontAwesomeIcon icon={faVideo} className='icon'/>
        </div>
        <div className="action-btn end-btn">
          <FontAwesomeIcon icon={faPhone} className='icon'/>
        </div>
        <div className="action-btn">
          <FontAwesomeIcon icon={faMicrophone} className='icon'/>
        </div>
      </div>
    </div>
  );
}

export default App;
