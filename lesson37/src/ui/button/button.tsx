import * as React from 'react';
import styled from 'styled-components';

interface Props {
   children:string;
   disabled?: boolean;
   onClick: () => void;
};

export const Button: React.FC<Props> = ({children,disabled,onClick}) => {
   return <ButtonWrapper type="button" disabled={disabled} onClick={()=>onClick()}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
all: unset;
padding: 10px;
border: 1px solid white;
background-color: blue;
cursor: pointer;

// &:disabled {
//    cursor: none;
//    background-color: gold;
//    opacity: 0.67;
}
`;