import './App.css';
import Leftside from "./Leftside";
import {useState} from 'react';

function App() {

const [stage, setStage] = useState(0);

  return (
    <Leftside stage={stage} setStage={setStage} />
  );
}

export default App;
