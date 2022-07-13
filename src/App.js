import React, {useState} from 'react';
import { Routes, Route} from "react-router-dom"

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import MyTickets from './components/MyTickets/Mytickets';
import MyNft from './components/MyNft/MyNft';
import NftPage from './components/NftPage/NftPage';
import Marketplace from './components/Marketplace/Marketplace';
import Roulette from './components/Roulette/Roulette';
import Game from './components/Game/Game';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {

  const [cardID, setCardID] = useState('')
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tickets" element={<MyTickets />} />
        <Route path="/nft" element={<MyNft setCardID={setCardID}/>} />
        <Route path={`/nft/page/${cardID}`} element={<NftPage cardID={cardID}/>} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/game" element={<Game />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
