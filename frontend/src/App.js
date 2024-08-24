import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Tasklist from './components/Taskslist';
import CreateEvent from "./components/CreateEvent"
import TicketBooking from './components/TicketBooking';
import UserProfile from './components/serProfile';
import SocialShare from './components/SocialShare';
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/register' element={<Register/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/CreateEvent' element={<CreateEvent/>}/>
        <Route  path='/all-tasks' element={<Tasklist/>}/>
        <Route path="/TicketBooking" element={<TicketBooking/>}></Route>
        <Route  path='/UserProfile' element={<UserProfile/>}/>
        <Route  path='/SocialShare' element={<SocialShare/>}/>
      </Routes>
    </div>
  );
}

export default App;
