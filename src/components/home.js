import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import { filterAnime } from '../redux/ranking/animeRanking';

const Home = () => {
  const animeList = useSelector((state) => state.animeReducer);
  const dispatch = useDispatch();

  const displayAnimes = (animeList) => (
    (animeList.anime.map((anime) => (
      <div key={anime.rank} id={anime.rank}>
        <NavLink key={anime.rank} to={`/${anime.rank}`}>
          <div>
            <FiArrowRightCircle />
          </div>
        </NavLink>
        <h3>{anime.title}</h3>
        <h4>
          Score:
          {anime.score}
        </h4>
      </div>
    )))
  );

  const displayFiltered = () => (
    (animeList.filtered.map((anime) => (
      <div key={anime.rank} rank={anime.rank}>
        <NavLink key={anime.rank} to={`/${anime.rank}`}>
          <div>
            <FiArrowRightCircle />
          </div>
        </NavLink>
        <h3>{anime.title}</h3>
        <h4>
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
      <div>
        <h1>Top Rated Animes</h1>
      </div>
      <div>
        <input placeholder="Anime name" onChange={searchAnime} />
      </div>
      <div>
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
