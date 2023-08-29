import './App.css';
import { Button3 } from './ui/button/button3.tsx';
import { Button4 } from './ui/button/button4.tsx';
import { Button5 } from './ui/button/button5.tsx';
import Seach from './ui/seach/seach.tsx';
import Title from './ui/title/title.tsx';

function App() {
  return (
    <div className="App">
      <Seach/>
      <header className="App-header">
      <Title>Sing In</Title>
       <div className="Tabs">
      <Button3 onClick ={() => console.log('clicked3')}>All</Button3>
      <Button4 onClick ={() => console.log('clicked4')}>My favorites</Button4>
      <Button5 onClick ={() => console.log('clicked5')}>Popular</Button5>
    </div>
      </header>
    </div>
    
  );
}

export default App;
