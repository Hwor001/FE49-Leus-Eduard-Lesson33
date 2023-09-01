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

const Post3: React.FC<Props> = (props) => {
  const { id, image, date, title } = props;

  return (
   <PostWrapper>
   <PostWrapper2>
    <PostWrapper3>
      <span>{date}</span>
      <h3>{title}</h3>
      </PostWrapper3>
   <PostImg>
      {image && <img src={image} alt={`Post ${id}`} />}
   </PostImg>
   </PostWrapper2>
   <div className='d'>
      <Down/>
   </div>
   </PostWrapper>
  );
};

const PostWrapper = styled.div`
   background-color: white;
   color: black;
   width: 370px;
   padding: 15px;
`;

const PostWrapper2 = styled.div`
  display:flex;
  justify-content: space-evenly;
`

const PostWrapper3 = styled.div`
   text-align: initial;
`

const PostImg = styled.div`
  width: 180px;
  img {
    width: -webkit-fill-available;
  }
`

export default Post3;