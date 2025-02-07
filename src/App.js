import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


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

  const removeBodyClass = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    removeBodyClass();
    console.log(cls);
    document.body.classList.add('bg-' + cls);
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
    {/* <Router> */}
    <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About-TextUtils"/>
    <Alert alert = {alert}/>

    {/* <Routes>
          {/* <Route path="/" element={<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About-TextUtils"/>}/> */}
          {/* <Route exact path="/TextForm" element={<TextForm />}/>
          <Route exa path="/about" element={<About />}/>
    </Routes>} */}
    <div className="container my-3">
    <TextForm  title="Use TextUtils : " mode={mode} showAlert= {showAlert}/>
      

    </div>
    {/* </Router> */}
    </>

  );
}

export default App;
