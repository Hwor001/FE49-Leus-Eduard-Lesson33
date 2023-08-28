import * as React from 'react';
import styled from 'styled-components';

interface Props {
   children:string;
   disabled?: boolean;
};

export const Button3: React.FC<Props> = ({children,disabled}) => {
   return <ButtonWrapper type="button" disabled={disabled}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
all: unset;
padding: 10px;
border: 1px solid white;
background: #ddd4d4;
color: red;
cursor: pointer;
`;