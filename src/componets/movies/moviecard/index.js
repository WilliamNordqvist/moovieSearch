import React, { useState, useEffect } from "react";
import * as Styled from "./style";
import Icon from '../../icon'

const MovieCard = ({ movie, addToFavoriteList, FavoriteList,ToWatchList, addToWatchList, setSelectedMovie }) => {
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
    <Styled.MovieCardContainer onClick={() => { setSelectedMovie(movie)}}>
      <Styled.MovieOverlay>
        <h2>{title}</h2>
        <p>{`${vote_average}/10`}</p>
        <Styled.MovieIcons>
          <Icon onClick={isAlreadyInFavorit ? () => RemoveMovieFromFavorite() : () => AddMovieToFavorite()} name='filled-star' color={FavoritIconColor} size="20px"/>
          <Icon onClick={isAlreadyInFavorit ? () => RemoveMovieFromFToWatch() : () => AddMovieToWatchList()} name='plus' color={PlusIconColor} size="20px"/>
        </Styled.MovieIcons>
      </Styled.MovieOverlay>
      <Styled.MovieCard
        poster_path={poster_path}
        image={`https://image.tmdb.org/t/p/w185/${poster_path}`}
      ></Styled.MovieCard>
    </Styled.MovieCardContainer>
  );
};

export default MovieCard;
