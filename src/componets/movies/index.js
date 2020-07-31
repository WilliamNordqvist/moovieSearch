import React, { useEffect, useState, useContext } from "react";
import themoviedbApiFetch from "../../helpers/themoviedbApiFetch";
import UserContext from "../../helpers/context/index";
import Moviecard from "./moviecard";
import Overlay from "../overlay.js";
import * as Styled from "./style";

const Movies = () => {
  const [defaultMovies, setDefaultMovies] = useState();
  const [FavoriteList, addToFavoriteList] = useState([]);
  const [ToWatchList, addToWatchList] = useState([]);
  const [SelectedMovie, setSelectedMovie] = useState([]);
  const { searchKeyWord, page } = useContext(UserContext);
  let mapArr = [];

  switch (page) {
    case "favorite":
      mapArr = FavoriteList;
      break;
    case "watchlist":
      mapArr = ToWatchList;
      break;
    default:
      mapArr = defaultMovies ? defaultMovies.results : null;
  }

  useEffect(() => {
    if (searchKeyWord) {
      themoviedbApiFetch(searchKeyWord)
        .then((result) => {
          setDefaultMovies(result);
        })
        .catch((error) => {
          console.log(error.message);
          console.log(error.request);
          console.log(error.config);
        });
    }
  }, [searchKeyWord, FavoriteList]);

  return (
    <Styled.MoviesContainer>
      <Overlay
        SelectedMovie={SelectedMovie}
        setSelectedMovie={setSelectedMovie}
      />

      {mapArr
        ? mapArr.map((movie) => {
            return (
              <Moviecard
                FavoriteList={FavoriteList}
                addToFavoriteList={addToFavoriteList}
                key={movie.id}
                movie={movie}
                ToWatchList={ToWatchList}
                addToWatchList={addToWatchList}
                setSelectedMovie={setSelectedMovie}
              />
            );
          })
        : null}
    </Styled.MoviesContainer>
  );
};

export default Movies;
