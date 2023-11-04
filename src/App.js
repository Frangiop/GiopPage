
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import ArtistPage from './pages/ArtistPage';
import CollectionPage from './pages/CollectionPage';
import DigitalArtPage from './pages/DigitalArtPage';

import CollectionPage1 from './pages/CollectionPage1';
import CollectionPage2 from './pages/CollectionPage2';
import CollectionPage3 from './pages/CollectionPage3';
import CollectionPage4 from './pages/CollectionPage4';

function App() {
  return (
    <div>
    <NavigationComponent></NavigationComponent>

    <Routes>
    <Route exact path="/artist" element={<ArtistPage/>} >Artist</Route>
    <Route exact path="/collections" element={<CollectionPage/>} >Collections</Route>
    <Route exact path="/digital-art" element={<DigitalArtPage/>} >Digital Art</Route>

    
    {/* Segundos enlaces */}

    <Route exact path="/collections1" element={<CollectionPage1/>} />
    
    <Route exact path="/collections2" element={<CollectionPage2/>} />
    
    <Route exact path="/collections3" element={<CollectionPage3/>} />
    
    <Route exact path="/collections4" element={<CollectionPage4/>} />
        </Routes>

          </div> 
  );
}

export default App;
