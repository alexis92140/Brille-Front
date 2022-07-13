import React from 'react';

import SignUp from '../components/account/SignUp';
// import UserAccount from '../components/account/UserAccount';
import GoToTop from '../components/globals/GoToTop';

// ----------------------------------------------------------------

const Account = () => {
  // const [user, setUser] = useState(null);

  return (
    <div className="app-header">
      {/* {user ? <UserAccount /> : <ConnectModal />} */}
      <SignUp />
      {/* <UserAccount /> */}
      <GoToTop />
    </div>
  );
};

export default Account;
