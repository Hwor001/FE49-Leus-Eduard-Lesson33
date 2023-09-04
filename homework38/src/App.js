import './App.css';
import Post from './ui/post1/post1';
import Post2 from './ui/post2/post2';
import Post3 from './ui/post3/post3';
import image1 from './Space_Milky_way_and_bright_night_stars_in_the_sky_159566_33.jpg';

function App() {
  const post1Count = 1; 
  const post2Count = 4; 
  const post3Count = 6; 

  const post1Data = Array.from({ length: post1Count }, (_, index) => ({
    id: index + 1,
    image: image1,
    text: 'Post content here...Post content here...Post content here...Post content here...Post content here...Post content here...',
    date: '2023-08-31',
    lesson_num: index + 1,
    title: 'Example Post Example Post Example Post Example Post Example Post Example Post Example Post Example Post',
    author: index + 1,
  }));

  const post2Data = Array.from({ length: post2Count }, (_, index) => ({
    id: index + 1,
    image: image1,
    text: 'Post content here...',
    date: '2023-08-31',
    lesson_num: index + 1,
    title: 'Example Post Example Post Example Post Example Post',
    author: index + 1,
  }));

  const post3Data = Array.from({ length: post3Count }, (_, index) => ({
    id: index + 1,
    image: image1,
    text: 'Post content here...',
    date: '2023-08-31',
    lesson_num: index + 1,
    title: 'Example Post Example Post Example Post Example Post',
    author: index + 1,
  }));

  return (
    <div className="App">
      <header className="App-header">
        {post1Data.map((postData, index) => (
          <Post key={index} {...postData} />
        ))}
        <div className="post2">
          {post2Data.map((postData, index) => (
            <Post2 key={index} {...postData} />
          ))}
        </div>
      </header>
      <div className="post3">
        {post3Data.map((postData, index) => (
          <Post3 key={index} {...postData} />
        ))}
      </div>
    </div>
  );
}

export default App;