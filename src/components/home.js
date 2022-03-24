import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import { filterAnime } from '../redux/ranking/animeRanking';
import './styles/home.css';

const Home = () => {
  const animeList = useSelector((state) => state.animeReducer);
  const dispatch = useDispatch();

  const displayAnimes = (animeList) => (
    (animeList.anime.map((anime) => (
      <div key={anime.rank} id={anime.rank} className="displayContent">
        <NavLink key={anime.rank} to={`/${anime.rank}`}>
          <div className="arrow2">
            <FiArrowRightCircle />
          </div>
        </NavLink>
        <h3 className="title">{anime.title}</h3>
        <h4 className="score">
          Score:
          {anime.score}
        </h4>
      </div>
    )))
  );

  const displayFiltered = () => (
    (animeList.filtered.map((anime) => (
      <div key={anime.rank} id={anime.rank} className="displayContent">
        <NavLink key={anime.rank} to={`/${anime.rank}`}>
          <div className="arrow2">
            <FiArrowRightCircle />
          </div>
        </NavLink>
        <h3 className="title">{anime.title}</h3>
        <h4 className="score">
          Score:
          {anime.score}
        </h4>
      </div>
    )))
  );

  const searchAnime = (e) => {
    const saveList = animeList;
    const searchString = e.target.value.toUpperCase();
    const newArray = animeList.anime.filter((animedata) => (
      animedata.title.toUpperCase().includes(searchString)
    ));
    dispatch(filterAnime(newArray, saveList));
  };

  return (
    <div>
      <div className="headline">
        <h1>Top Rated Animes</h1>
      </div>
      <div className="stats">
        <input placeholder="Search Anime" onChange={searchAnime} />
      </div>
      <div className="content">
        {
            animeList.filtered.length === 0
              ? displayAnimes(animeList)
              : displayFiltered(animeList)
        }
      </div>
    </div>
  );
};

export default Home;
