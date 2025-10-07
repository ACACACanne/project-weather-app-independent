'use client';
import { useState } from 'react';
import Globe from 'components/Globe';
import SearchBar from 'components/SearchBar';




function App() {
  const [city, setCity] = useState(null);

  return (
    <div className="App">
      <SearchBar onCityFound={setCity} />
      <Globe city={city} />
    </div>
  );
}

export default App;