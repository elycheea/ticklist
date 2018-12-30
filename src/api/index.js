import axios from 'axios';

const getClimbs = () => {
  return axios.get('/api/climbs')
    .then(res => res.data);
};

const addClimb = (climb) => {
  return axios.post('/api/climbs', climb)
    .then(res => res.data);
};

const removeClimb = (idToDelete) => {
  return axios.delete('/api/climbs', { data: {idToDelete} })
    .then(res => res.data);
};

export default {
  getClimbs,
  addClimb,
  removeClimb
}
