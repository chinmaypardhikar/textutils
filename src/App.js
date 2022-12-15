import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const togglemode =()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#35363a';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  
  const showAlert=(message, type)=>{
    setAlert({msg:message, 
             type:type});

    setTimeout(()=>{setAlert(null)}, 3000);
  }

  return (
    <>
    <Navbar brand="TextUtils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below : " mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );

}

export default App;
