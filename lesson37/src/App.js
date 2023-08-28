import './App.css';
import { Button } from './ui/button/button.tsx';
import { Button2 } from './ui/button/button2.tsx';
import { Button3 } from './ui/button/button3.tsx';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Button onClick = {() => console.log('clicked')}>Primary</Button>
        <Button2 disabled>Secondary</Button2>
        <Button3 disabled>Secondary 2</Button3>
      </header>
    </div>
  );
}

export default App;
