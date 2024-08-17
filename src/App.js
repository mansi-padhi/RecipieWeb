import React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';
import Home from "./pages/Home";
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import RecipieDetail from './pages/RecipieDetail';

function Layout(){
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}


function App() {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route index element={<Home />}/>
        <Route path='recipes/:id' element={<RecipieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
