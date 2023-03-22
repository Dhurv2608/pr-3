import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

import Home from './Home';
import Industries from './Industries';
import Layout from './Layout';
import Services from './Services';
import Services_element from './Services_element';

const App = () => {


  return (
    <div>
 
    <Routes>
            <Route path='/' element={<Layout><Home/></Layout>}></Route>
            <Route path='/About' element={<Layout><About/></Layout>}></Route>
            <Route path='/Services' element={<Layout><Services /></Layout>}></Route>
            <Route path='/Industries' element={<Layout><Industries /></Layout>}></Route>
            <Route path='/Services_element' element={<Layout><Services_element /></Layout>}></Route>
            <Route path='/Blog' element={<Layout><Blog /></Layout>}></Route>
            <Route path='/Contact' element={<Layout><Contact /></Layout>}></Route>
    </Routes>
      
    </div>
  )
}

export default App
