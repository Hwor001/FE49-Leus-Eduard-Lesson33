import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../namelogo/logo.tsx';
import { Button } from '../button/button.tsx';
import { Button2 } from '../button/button2.tsx';
import { Button6 } from '../button/button6.tsx';

interface Props {
  children: string;
}


export const Seach: React.FC<Props> = ({ children }) => {
   const [showLogo, setShowLogo] = useState(false);

   const toggleLogo = () => {
     setShowLogo(!showLogo);
   };

   return (
      <div className='Header'>
        <Button2 onClick={toggleLogo}>
           <img  src={require('./img/burger-menu-icon-8.jpg').default} alt='#' />
        </Button2>
        <SeachWrapper className="seach">
        <input className="seach-text"
          type="text"
          placeholder="Search..."
        />
          {children}<Button6 onClick = {() => console.log('clicked')}>X</Button6>
        </SeachWrapper>
        <Button onClick={() => console.log('clicked2')}>
          <img alt='#' src={require('./img/lupa.png').default}  />
        </Button>
        <Logo username='Artem Malkin' />
        {showLogo && (
          <LogoWrapper>
            <Logo username='Artem Malkin' />
          </LogoWrapper>
        )}
      </div>
    );
  };

const LogoWrapper = styled.div`
display: flex;
transform: translate3d(-1004px, 70px, 10px);
`;


const SeachWrapper = styled.div`
  all: unset;
  input {
   background-color: #4949b1;
   padding: 26px 570px 26px 0;
   color: white;
   &::placeholder {
     color: silver; /* Серый цвет для placeholder */
   }
 }
`;

export default Seach;