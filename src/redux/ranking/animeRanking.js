import axios from 'axios';

const SET_ANIME_DATA = 'SET_ANIME_DATA';
const GET_FILTERED = 'GET_FILTERED';

const initialState = {
  anime: [],
  filtered: [],
};

export const animeArr = (response) => {
  response.map((anime) => (
    initialState.anime.push({
      rank: anime.rank,
      title: anime.title,
      score: anime.score,
      details: {
        type: anime.type,
        source: anime.source,
        episodes: anime.episodes,
        status: anime.status,
        year: anime.season,
      },
    })
  ));
  return initialState;
};

export const setAnime = () => async (dispatch) => {
  const { data } = await axios.get('https://api.jikan.moe/v4/top/anime');
  dispatch({
    type: SET_ANIME_DATA,
    payload: animeArr(data),
  });
};

export const filterAnime = (newArr, savedArr) => ({
  type: GET_FILTERED,
  payload: [newArr, savedArr],
});

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANIME_DATA: {
      return { ...action.payload };
    }
    case GET_FILTERED: {
      return {
        ...state,
        filtered: action.payload[0],
      };
    }
    default:
      return state;
  }
};

export default animeReducer;
