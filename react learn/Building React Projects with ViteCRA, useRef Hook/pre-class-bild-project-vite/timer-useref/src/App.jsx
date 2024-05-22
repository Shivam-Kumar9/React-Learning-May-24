import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import {useState} from 'react';



function App() {

 const [showTimer, setShowTimer] = useState(true)

  return (
    <div className='App'>
      {showTimer ? <Timer/> : null}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle timer</button>
    </div>
  );
}

export default App;
