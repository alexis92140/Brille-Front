import React, { useState } from 'react';

// import UserAccount from '../components/account/UserAccount';
import ConnectModal from '../components/account/ConnectModal';
import GoToTop from '../components/globals/GoToTop';

const Account = () => {
  // const [user, setUser] = useState(null);

  return (
    <div className="app-header">
      {/* {user && (
        <div className="user-infos">
          <span>{user?.displayName[0]}</span>
          <h4>{user?.displayName}</h4>
          <button onClick={logOutHandler}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      )} */}
      {/* {user ? <UserAccount /> : <ConnectModal />} */}
      <ConnectModal />
      <GoToTop />
    </div>
  );
};

export default Account;
