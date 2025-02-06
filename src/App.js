import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';


function App() {
  const [mode,setMode] = useState("light");

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled","success");
    }
  }

  return (
    <>
    <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About-TextUtils"/>
    <Alert alert = {alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyse"/>
      {/* <About/> */}

    </div>
    </>

  );
}

export default App;
