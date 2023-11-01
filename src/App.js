
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import ArtistPage from './pages/ArtistPage';
import CollectionPage from './pages/CollectionPage';
import DigitalArtPage from './pages/DigitalArtPage';

function App() {
  return (
    <div>
    <NavigationComponent></NavigationComponent>

    <Routes>
    <Route exact path="/artist" element={<ArtistPage/>} >Artist</Route>
    <Route exact path="/collections" element={<CollectionPage/>} >Collections</Route>
    <Route exact path="/digital-art" element={<DigitalArtPage/>} >Digital Art</Route>
        </Routes>
          </div> 
  );
}

export default App;
