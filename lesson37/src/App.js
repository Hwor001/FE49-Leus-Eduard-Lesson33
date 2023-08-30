import './App.css';
import { Button } from './ui/button/button';
import { Button2 } from './ui/button/button2';
import { Button3 } from './ui/button/button3';
import { Logo } from './ui/namelogo/logo';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Logo>Artem Malkin</Logo>
        <Button onClick = {() => console.log('clicked')}>Primary</Button>
        <Button2 onClick = {() => console.log('clicked2')}>Secondary</Button2>
        <Button3 onClick = {() => console.log('clicked3')}>Secondary 2</Button3>
      </header>
    </div>
  );
}

export default App;
