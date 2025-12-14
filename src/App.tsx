import {BrowserRouter as Router,Routes, Route,useMatch} from 'react-router-dom'
import Homepage from "./Homepage"
import { useLocation } from 'react-router-dom'
import Navbar from './content/Navbar'
import AboutPage from './AboutPage'
import Contactpage from './Contactpage'
import BookNow from './BookNow'

import Register from './content/Register'
import Login from './content/Login'
import DashBoard from './DashBoard'
import AllInfo from './AllInfo'

// import ScrollFooter from './content/Footer'

function App() {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/getAllInfo/:id" element={<AllInfo />} />
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<Contactpage/>}/>
        <Route path='/book' element={<BookNow/>}/>
      </Routes>
      {/* <ConditionalFooter/> */}
    </Router>
  )
}

function ConditionalNavbar() {
  
  const location = useLocation();
  const noNavbarPaths = ['/register', '/login', '/dashboard'];
  const isBookPage = useMatch('/getAllInfo/:id');
  const shouldHideNavbar = noNavbarPaths.includes(location.pathname) || isBookPage
  
 return shouldHideNavbar ? null : <Navbar />;
}


export default App
