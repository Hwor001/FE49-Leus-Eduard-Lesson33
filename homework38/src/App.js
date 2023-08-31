import './App.css';
import Post from './ui/post1/post1';
import Post2 from './ui/post2/post2';
import Post3 from './ui/post3/post3';
import image1 from './Space_Milky_way_and_bright_night_stars_in_the_sky_159566_33.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Post
          id={1}
          image={image1}
          text="Post content here..."
          date="2023-08-31"
          // lesson_num={5}
          title="Example Post"
          author="John Doe"
        />
        <Post2
          id={1}
          image={image1}
          text="Post content here..."
          date="2023-08-31"
          // lesson_num={5}
          title="Example Post"
          author="John Doe"
        />
        <Post3
          id={1}
          image={image1}
          text="Post content here..."
          date="2023-08-31"
          // lesson_num={5}
          title="Example Post"
          author="John Doe"
        />
      </header>
    </div>
  );
}

export default App;
