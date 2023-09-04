import { TabPanel } from './ui/tabs/tads-panel.tsx';
import './App.css';
import Seach from './ui/seach/seach.tsx';
import Title from './ui/title/title.tsx';
import React, { useState } from 'react';


function App() {
const tabItems = [
  {id:'1',title:'All'},
  {id:'2',title:'My favorites'},
  {id:'3',title:'Popular'},
]

  const [activeTabId, setActiveTabId] = useState(tabItems[0].id) 
  return (
    <div className="App">
      <Seach/>
      <header className="App-header">
      <Title>Sing In</Title>
      <TabPanel 
        items={[
          {id:'1',title:'All'},
          {id:'2',title:'My favorites'},
          {id:'3',title:'Popular'},
        ]}
        activeId={activeTabId}
        onTabClick={setActiveTabId}
      />
      </header>
    </div>
    
  );
}

export default App;
