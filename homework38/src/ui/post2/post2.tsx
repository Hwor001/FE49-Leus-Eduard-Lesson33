import React from 'react';
import styled from 'styled-components';
import Down from '../down/down';

interface Props {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

const Post2: React.FC<Props> = (props) => {
  const { id, image, date, title } = props;

  return (
   <PostWrapper>
      <PostWrapper2>
      <PostWrapper3>
         {image && <img src={image} alt={`Post ${id}`} />}
         <p>{date}</p>
         <h3>{title}</h3>
         </PostWrapper3>
         </PostWrapper2>
            <Down/>
   </PostWrapper>
  );
};

const PostWrapper = styled.div`
   width: 370px;
   background-color: white;
   color: black;
   padding: 15px;
`;

const PostWrapper2 = styled.div`

`

const PostWrapper3 = styled.div`
text-align: initial;
img {
   width: -webkit-fill-available;
}
`


export default Post2;