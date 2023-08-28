import * as React from 'react';
import styled from 'styled-components';

interface Props {
   children:string;
   disabled?: boolean;
   onClick: () => void;
};

export const Button: React.FC<Props> = ({children,disabled,onClick}) => {
   return <ButtonWrapper type="button" disabled={disabled} onClick={()=>onClick()}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
all: unset;
padding: 5px 37px;
background-color: blue;
cursor: pointer;
margin-bottom: 10px;

&:disabled {
   cursor: none;
   background-color: gold;
   opacity: 0.67;
}

&:hover {
   background-color: rgb(41, 41, 189);
}
 
 
&:active {
   background-color: rgb(199, 199, 207);
   color: rgb(124, 124, 126);
}
`;