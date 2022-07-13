import React from 'react';

import UserProfile from './UserProfile';

// ----------------------------------------------------------------

const UserAccount = () => {
  return (
    <div className="userAccountContainer">
      <div className="userAccountContainer__profil">
        <UserProfile />
      </div>
    </div>
  );
};

export default UserAccount;
