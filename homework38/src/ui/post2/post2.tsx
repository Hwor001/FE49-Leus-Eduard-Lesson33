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

const Post2: React.FC<Props> = (props) => {
  const { id, image, date, title } = props;

  return (
   <PostWrapper>
      <div className='post'>
      <div className="post-card">
         {image && <img src={image} alt={`Post ${id}`} />}
         <p>{date}</p>
         <h3>{title}</h3>
         </div>
         <div className='d'>
            <Down/>
            </div>
      </div>
   </PostWrapper>
  );
};

const PostWrapper = styled.div`
   background-color: white;
   color: black;
`;

export default Post2;