import React from 'react';

// import UserAccount from '../components/account/UserAccount';
import SignUp from '../components/account/SignUp';
import GoToTop from '../components/globals/GoToTop';

// ----------------------------------------------------------------

const Account = () => {
  // const [user, setUser] = useState(null);

  return (
    <div className="app-header">
      {/* {user ? <UserAccount /> : <ConnectModal />} */}
      <SignUp />
      <GoToTop />
    </div>
  );
};

export default Account;
