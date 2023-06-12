import './App.css';
import Home from './components/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/adduser' element={<AddUser/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
