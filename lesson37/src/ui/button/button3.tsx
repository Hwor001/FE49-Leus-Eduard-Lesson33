import * as React from 'react';
import styled from 'styled-components';

interface Props {
   children: string;
   disabled?: boolean;
   onClick: () => void;
}

export const Button3: React.FC<Props> = ({ children, disabled, onClick }) => {
   return <ButtonWrapper type="button" disabled={disabled} onClick={onClick}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
   all: unset;
   padding: 5px 11px;
   border: 1px solid white;
   background: #ddd4d4;
   color: red;
   cursor: pointer;

   &:disabled {
      cursor: none;
      background-color: gold;
      opacity: 0.67;
   }

   &:hover {
      background-color: rgb(255, 253, 253);
      border: 1px solid rgb(119, 118, 118);
   }
    
   &:active {
      background-color: rgb(255, 255, 255);
      color: rgb(124, 124, 126);
   } 
`;