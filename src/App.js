import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';

import Home from './Home';
import Layout from './Layout';
import Services from './Services';

const App = () => {


  return (
    <div>
 
    <Routes>
            <Route path='/' element={<Layout><Home/></Layout>}></Route>
            <Route path='/About' element={<Layout><About/></Layout>}></Route>
            <Route path='/Services' element={<Layout><Services /></Layout>}></Route>
    </Routes>
      
    </div>
  )
}

export default App
