import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Style.css'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Forgot from './components/Forgot';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/SingUp' element={<SignUp/>}/>
          <Route path='/Forgot' element={<Forgot/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
