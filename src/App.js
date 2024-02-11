import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Navbar } from './Components/navbar/Navbar';
import { LandingPage } from './Components/Landing_Page/Landing_Page';
import {Sign_Up} from './Components/Sign_up/Signup';
import {Login} from './Components/login/Login'
import {InstantConsultation} from './Components/InstantConsultationBooking/InstantConsultation'
import {GiveReviews} from './Components/Reviews/Reviews'
import {ProfileForm} from './Components/ProfieCard/Profilecard'
function App() pp{
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' Component={LandingPage}/>
            <Route path='/signup' Component={Sign_Up}/>
            <Route path='/login' Component={Login}/>
            <Route path='/instant-consultation' Component={InstantConsultation}/>
            <Route path='/Notification' Component={ProfileForm}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
