import * as React from 'react';
import styled from 'styled-components';

interface Props {
   children: string;
};

export const Title: React.FC<Props> = ({children}) => {
   return <TitleWrapper className="title">
      {children}
      </TitleWrapper>;
};

const TitleWrapper = styled.div`
all: unset;
font-size: 60px;
font-weight: 600;
`;

export default Title;