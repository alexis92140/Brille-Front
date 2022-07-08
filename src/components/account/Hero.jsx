import React from 'react';

// interface IProps {
//   firstname: string;
//   setFirstname: (active: string) => void;
//   lastname: string;
//   setLastname: (active: string) => void;
//   email: string;
//   setEmail: (active: string) => void;
//   handleFirstname: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleLastname: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }
// const LeftSide: FC<IProps> = ({

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroContainer__title">
        <h1>
          BIENVENUE DANS LE MONDE DE <span>BRILLE</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
