import * as React from 'react';
import styled from 'styled-components';

interface Props {
   children:string;
   disabled?: boolean;
   onClick: () => void;
};

export const Button2: React.FC<Props> = ({children,disabled,onClick}) => {
   return <ButtonWrapper type="button"  disabled={disabled} onClick={()=>onClick()}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
all: unset;
padding: 5px 22px;
background: silver;
color: black;
cursor: pointer;
margin-bottom: 10px;

&:disabled {
   cursor: none;
   background-color: gold;
   opacity: 0.67;
}

&:hover {
   background-color: rgb(131, 131, 131);
}
    
&:active {
   background-color: rgb(199, 199, 207);
   color: rgb(124, 124, 126);
}
`;