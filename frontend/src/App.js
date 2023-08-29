import './App.css';
import {useState, useEffect} from 'react';
import {Routes,Route, Navigate} from "react-router-dom";
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/country/:id" element={<CountryPage/>}/>
    </Routes>
    </>
  );
}

export default App;
