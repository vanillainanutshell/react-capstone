import axios from 'axios';

const SET_ANIME_DATA = 'SET_ANIME_DATA';
const GET_FILTERED = 'GET_FILTERED';

const initialState = {
  anime: [],
  filtered: [],
};

export const animeArr = (response) => {
  response.data.map((animedata) => (
    initialState.anime.push({
      rank: animedata.rank,
      title: animedata.title,
      score: animedata.score,
      details: {
        type: animedata.type,
        source: animedata.source,
        episodes: animedata.episodes,
        status: animedata.status,
        year: animedata.season,
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
