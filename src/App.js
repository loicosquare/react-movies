import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coup-de-coeur' element={<UserList/>}></Route>
        <Route path='/all' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;