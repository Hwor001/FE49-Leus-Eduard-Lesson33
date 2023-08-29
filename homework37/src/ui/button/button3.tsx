import * as React from 'react';
import styled from 'styled-components';

interface Props {
   children:string;
   disabled?: boolean;
   onClick: () => void;
};

export const Button3: React.FC<Props> = ({children,disabled,onClick}) => {
   return <ButtonWrapper type="button" disabled={disabled} onClick={()=>onClick()}>
      {children}
   </ButtonWrapper>;
};

const ButtonWrapper = styled.button`
all: unset;
color: black;
padding: 5px 37px;
background-color: white;
cursor: pointer;
margin-bottom: 10px;
border-bottom: 1px solid black;

&:disabled {
   cursor: none;
   background-color: gold;
   opacity: 0.67;
}

&:hover {
   color: blue;
   border-bottom: 1px solid silver;
}
 
 
&:active {
   color: rgb(124, 124, 126);
   border-bottom: 1px solid silver;
}
`;