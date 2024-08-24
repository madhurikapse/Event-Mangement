import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Aboute from './components/Aboute';
import Contacts from './components/Contacts';
import Services from './components/Services'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Page from './components/Page'
import Login from './components/Login';
import Decorations from "./components/Decorations"
import { ToastContainer } from 'react-toastify';
import CreateEvent from './Events/CreateEvent';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import TicketBooking from './components/TicketBooking';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Aboute' element={<Aboute/>}></Route>
        <Route path='/Contacts' element={<Contacts/>}></Route>
        <Route path='/Decorations' element={<Decorations/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/Footer' element={<Footer/>}></Route>
        <Route path='*' element={<Page/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/CreateEvent' element={<CreateEvent/>}></Route>
        <Route path="/" element={<EventList />} />
        <Route path="/create-event" element={<EventForm />} />
        <Route path="/book-ticket/:eventId" element={<TicketBooking />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
