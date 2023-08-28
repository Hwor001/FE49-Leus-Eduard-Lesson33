import * as React from 'react';
import styled from 'styled-components';
import { NameLogo } from './namelogo.tsx';

interface Props {
   username: string;
};

export const Logo: React.FC<Props> = ({username}) => {
   return <LogoWrapper className="logo-content">
      <NameLogo username="AM" />
      {username='Artem Malkin'}
      </LogoWrapper>;
};

const LogoWrapper = styled.button`
all: unset;
padding: 24px;
background-color: blue;
margin-bottom: 10px;
`;