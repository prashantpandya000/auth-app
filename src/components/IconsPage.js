import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
function IconsPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Icons Page</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
        <div>
          <FontAwesomeIcon icon={faHome} size="3x" />
          <p>Home</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} size="3x" />
          <p>Profile</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCog} size="3x" />
          <p>Settings</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faSignOutAlt} size="3x" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default IconsPage;
