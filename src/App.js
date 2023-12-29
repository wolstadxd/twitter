import './app.scss'
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Route, Routes} from "react-router-dom";
import Profile from './components/Profile';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="wrapper">
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
