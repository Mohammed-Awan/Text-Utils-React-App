// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {


  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() =>{
      setAlert(null);
    },1500) 
  }

  const [mode,setMode] = useState('light');

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }

  

  return (
    <>
      <Navbar title={"TextUtils"} about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <TextForm  heading='Enter the text to analyze below' mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      {/* <About /> */}
      </div>
      
    </>
  );
}

export default App;
