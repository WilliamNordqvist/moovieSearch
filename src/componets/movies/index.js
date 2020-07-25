import React, { useEffect, useState ,useContext } from 'react';
import themoviedbApiFetch from '../../helpers/themoviedbApiFetch'
import UserContext from "../../helpers/context/index";

const Movies = () => {
  const [defaultMovies, setDefaultMovies] = useState()
  const { serachKeyWord } = useContext(UserContext);
  useEffect(()=>{
    if(serachKeyWord){
      themoviedbApiFetch(serachKeyWord).then((result) => {setDefaultMovies(result)})
    }
    
  },[serachKeyWord])
  
return(
  <div></div>
)
}

export default Movies