import React, { useState, useEffect, useContext} from "react";
import * as Styled from "./style";
import Icon from '../../icon'
import UserContext from "../../../helpers/context/index";

const MovieCard = ({ movie, addToFavoriteList, FavoriteList,ToWatchList, addToWatchList, setSelectedMovie }) => {
  const { isMobile } = useContext(UserContext);
  const [ FavoritIconColor, setFavoritIconColor ] = useState('#ececec');
  const [ PlusIconColor, setPlusIconColor ] = useState('#ececec');
  const { title, poster_path, vote_average } = movie;
  const isAlreadyInFavorit = FavoriteList && FavoriteList.map(i => i.id).includes(movie.id)
  const isAlreadyInToWatch = ToWatchList && ToWatchList.map(i => i.id).includes(movie.id)

const AddMovieToFavorite = () => {
  addToFavoriteList([...FavoriteList, movie])
  setFavoritIconColor('#d4af37')
}

const RemoveMovieFromFavorite = () => {
  const newFavoriteList = FavoriteList.filter(i => i.id !== movie.id)
  addToFavoriteList(newFavoriteList)
  setFavoritIconColor('#ececec')
}


const AddMovieToWatchList = () => {
  addToWatchList([...ToWatchList, movie])
  setPlusIconColor('#d4af37')
}

const RemoveMovieFromFToWatch = () => {
  const newToWatchlist = ToWatchList.filter(i => i.id !== movie.id)
  addToWatchList(newToWatchlist)
  setPlusIconColor('#ececec')
}

useEffect(()=> {
 if(isAlreadyInFavorit){
  setFavoritIconColor('#d4af37')
 }
 if(isAlreadyInToWatch){
  setPlusIconColor('#d4af37')
 }
}, [isAlreadyInFavorit, isAlreadyInToWatch])

  return (
    <Styled.MovieCardContainer>
      <Styled.MovieOverlay >
        <div className="MovieTitle" onClick={() => { setSelectedMovie(movie)}}>
        <h2>{title}</h2>
          <p>{`${vote_average}/10`}</p>
        </div>
        
        <div className="MovieIcons">
          <Icon onClick={isAlreadyInFavorit ? () => RemoveMovieFromFavorite() : () => AddMovieToFavorite()} name='filled-star' color={FavoritIconColor} size={isMobile ? '25px' : '20px'}/>
          <Icon onClick={isAlreadyInToWatch ? () => RemoveMovieFromFToWatch() : () => AddMovieToWatchList()} name='plus' color={PlusIconColor} size={isMobile ? '25px' : '20px'}/>
        </div>
      </Styled.MovieOverlay>
      <Styled.MovieCard 
        poster_path={poster_path}
        image={`https://image.tmdb.org/t/p/w185/${poster_path}`}
      ></Styled.MovieCard>
    </Styled.MovieCardContainer>
  );
};

export default MovieCard;
