import axios from 'axios';

const getShakespeareTextMatches = (q) => {
  return axios.get('http://localhost:3001/search', {
    params: {
      q: q,
    },
  })
};

export default getShakespeareTextMatches;
