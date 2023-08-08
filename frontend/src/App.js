import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ArtistsPage from "./pages/ArtistsPage";
import SongsPage from "./pages/SongsPage";
import AlbumsPage from "./pages/AlbumsPage";
import LabelPage from "./pages/LabelPage";
import DisplayAllArtists from "./pages/DisplayAllArtists";

// This is where we will be storing our links to the webpages :)
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            {/* <Route exact path="/loginPage" element={
              <LogIn/>
            }/> */}

            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/artists" element={<ArtistsPage />} />
            <Route exact path="/songs" element={<SongsPage />} />
            <Route exact path="/albums" element={<AlbumsPage />} />
            <Route exact path="/labels" element={<LabelPage />} />
            <Route exact path="/AllArtists" element={<DisplayAllArtists />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
