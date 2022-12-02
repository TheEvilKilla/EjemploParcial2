import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Detail from './components/Detail/detail';
import PlaceList from './components/PlaceList/placeList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlaceList />} />
          <Route path="/:placeId" element={< Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
