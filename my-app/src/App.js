import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/header/Header';
import Profile from './Components/profile/Profile';
import RockectsList from './Components/rocketList/RocketList';

function App() {
  return (
    <>
      <Header />
      <div className="App" />
      <Routes>
        <Route path="my-profile" element={<Profile />} />
        <Route path="rockets" element={<RockectsList />} />
      </Routes>
    </>
  );
}

export default App;
