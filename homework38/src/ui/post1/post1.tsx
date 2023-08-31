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
  author: string;
}

const Post: React.FC<Props> = (props) => {
  const { id, image, text, date, title } = props;

  return (
    <PostWrapper>
      <div className='post1'>
        <div className="post-card">
          <span>{date}</span>
          <h2>{title}</h2>
          <span>{text}</span>
        </div>
        <div className="post-info">
          {image && <img src={image} alt={`Post ${id}`} />}
        </div> 
      </div>
      <div className='d'>
         <Down/>
      </div>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
   background-color: white;
   color: black;
`;

export default Post;