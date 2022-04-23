import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Info from './components/Info';

function App() {
  const [inputText, setInputText] = useState("");
  const [weerData, setWeerData] = useState({});
  return (
    <div className="App">
      <main>
        <Form 
        inputText={inputText}
        setInputText={setInputText}
        weerData={weerData}
        setWeerData={setWeerData}/>
        {(typeof weerData.main != "undefined") ? (
        <Info weerData={weerData}/>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
