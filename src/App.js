import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/details';
import Home from './components/home';
import NavBar from './components/navBar';
import { setAnime } from './redux/ranking/animeRanking';

function App() {
  const animeList = useSelector((state) => state.animeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!animeList.length) {
      dispatch(setAnime());
    }
  }, []);
  console.log(animeList);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="*/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
