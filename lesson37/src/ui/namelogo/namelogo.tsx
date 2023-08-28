import * as React from 'react';
import styled from 'styled-components';


interface Props {
   username: string;
};

export const NameLogo: React.FC<Props> = ({username}) => {
   return <NameLogoWrapper className="logo-content">
      {username}
      </NameLogoWrapper>;
};

const NameLogoWrapper = styled.button`
all: unset;
padding: 12px;
background-color: #3b3b89;
margin-right:20px;
`;