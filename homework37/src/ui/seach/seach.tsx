import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../namelogo/logo';
import x from './img/75519.png';
import lupa from './img/lupa.png';
import burger from './img/burger-menu-icon-8.jpg';
import { Button } from '../button/button';
import { Button2 } from '../button/button2';
import { Button6 } from '../button/button6';

interface Props {
  children: string;
}

export const Search: React.FC<Props> = ({ children }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [currentImage, setCurrentImage] = useState(burger);
  const [inputValue, setInputValue] = useState('');

  const toggleLogo = () => {
    setShowLogo(!showLogo);
    setCurrentImage(currentImage === burger ? x : burger);
  };

  const clearInput = () => {
    setInputValue('');
  };

  return (
    <div className='Header'>
      <Button2 onClick={toggleLogo}>
        <img src={currentImage} alt='#' className='pic1' />
      </Button2>
      {showLogo ? (
        <BlueRectangle className="blue-rectangle" />
      ) : (
        <SeachWrapper className="search">
          <input
            className="search-text"
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {children}
          <Button6 onClick={clearInput}>
            <img src={x} alt='#' className='pic3' />
          </Button6>
        </SeachWrapper>
      )}
      <Button onClick={() => console.log('clicked2')}>
        <img src={lupa} alt='#' className='pic2' />
      </Button>
      <Logo username='Artem Malkin' />
      <LogoWrapper>{showLogo && (
          <Logo username='Artem Malkin' />
      )}</LogoWrapper>
    </div>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  transform: translate3d(0px, 70px, 0px);
  position: absolute;
`;

const SeachWrapper = styled.div`
  all: unset;
  width: 81%;
  input {
    width: -webkit-fill-available;
    background-color: #4949b1;
    padding: 26px 0 26px 0;
    color: white;
    &::placeholder {
      color: silver; /* Gray color for placeholder */
    }
  }
`;

const BlueRectangle = styled.div`
  width: 735px;
  height: auto;
  background-color: blue;
`;

export default Search;