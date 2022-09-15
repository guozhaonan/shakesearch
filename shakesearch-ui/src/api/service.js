import axios from 'axios';

const getShakespeareTextMatches = (q) => {
  return axios.get('/search', {
    params: {
      q: q,
    },
  })
};

export default getShakespeareTextMatches;
