import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import MyProfile from './components/my-profile/MyProfile';
import Missions from './components/missions/Missions';
import RokectsList from './components/rocket/RocketList';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<RokectsList />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/rockets" element={<RokectsList />} />
      </Routes>
    </div>
  );
}

export default App;
