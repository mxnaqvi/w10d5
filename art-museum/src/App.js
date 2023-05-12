import React from 'react';
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation';
import harvardArt from './data/harvardArt'; // Corrected import path

function App() {
  return (
    <div className="app">
      <GalleryNavigation galleries={harvardArt.records} />
      {/* Other components and content */}
    </div>
  );
}

export default App;

