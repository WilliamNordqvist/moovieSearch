import axios from 'axios';


const themoviedbApiFetch = async (searchKeyWord) => {
  const api_key =process.env.REACT_APP_API_KEY;
 const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchKeyWord}&api_key=${api_key}&page=*`);
  return res.data;
}


export default themoviedbApiFetch