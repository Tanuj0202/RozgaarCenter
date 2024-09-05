import './App.css';
import Navbar from './components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// import Info from './components/Info';

import { Routes, Route, HashRouter } from 'react-router-dom';
import Admitcard from './components/Admitcard';
import Home from './components/Home';
import AboutUs from './components/pages/AboutUs';
import Login from './components/pages/Login';
import OurServices from './components/pages/OurServices';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Signup from './components/pages/Signup';
import Shop from './components/pages/Shop';

// import Cards from './components/Cards';




function App() {
  return (
    <div className='min-h-screen'>
      <HashRouter>
      <Navbar/>
       
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admitcard' element={<Admitcard name="Admit Card" heading="RC Admit-Card"/>}/>    
        <Route path='/latestjobs' element={<Admitcard name="Latest Jobs" heading="RC Latest-Jobs"/>}/>    
        <Route path='/results' element={<Admitcard name="Results" heading="RC Results"/>}/>    
        <Route path='/syllabus' element={<Admitcard name="Syllabus" heading="RC Syllabus"/>}/>    
        <Route path='/answerkeys' element={<Admitcard name="Answer Keys" heading="RC Anser-Keys"/>}/>    
        <Route path='/others' element={<Admitcard name="Others" heading="RC Others"/>}/>    
        <Route path='/about-us' element={<AboutUs/>}/>    
        <Route path='/our-services' element={<OurServices/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/shop' element={<Shop/>}/>
        {/* <Route path='/admitcard' element={<Cards/>}/>     */}
      </Routes>
      {/* <Info/> */}
      </HashRouter>
      
      
    </div>
  );
}

export default App;
library.add(fab, fas, far)
