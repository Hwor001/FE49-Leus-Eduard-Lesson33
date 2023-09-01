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

const Post: React.FC<Props> = (props) => {
  const { id, image, text, date, title } = props;

  return (
    <PostWrapper>
      <PostWrapper2>
        <PostWrapper3>
          <span>{date}</span>
          <h2>{title}</h2>
          <span>{text}</span>
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
  width: 770px;
  padding: 15px;
`;

const PostWrapper2 = styled.div`
  display:flex;
`

const PostWrapper3 = styled.div`
  text-align: initial;
`

const PostImg = styled.div`
  width: 244px;
  img {
    width: -webkit-fill-available;
  }
`

export default Post;