import React from 'react';
import { Navbar } from './components';
import { Login, Home, Post } from './pages';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import "./App.css";


const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
          <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login"/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App