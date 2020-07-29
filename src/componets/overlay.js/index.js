import React from "react";
import * as Styled from "./style";
import Icon from "../icon";

const Overlay = ({setSelectedMovie, SelectedMovie}) => {
  const { title, overview, poster_path, release_date, vote_average } = SelectedMovie
  const movieImgurl = poster_path ? `https://image.tmdb.org/t/p/w342/${poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/500px-No_image_available.svg.png'
  return (
    <Styled.OverlayContainer SelectedMovie={Object.keys(SelectedMovie).length}>
      <Styled.OverlayWindow>
        <Icon name="close" size="20px" color="black" onClick={ () => setSelectedMovie({})}/>
        
        <Styled.Content>
        <img src={movieImgurl} alt="movie-img"/>
        <h2 className="movie-title">{title}</h2>
        <p className="movie-releasedate">{release_date}</p>
        <p className="movie-rating">{`${vote_average}/10`}</p>
        <p className="movie-text">{overview}</p>
        </Styled.Content>
      </Styled.OverlayWindow>
    </Styled.OverlayContainer>
  );
};

export default Overlay;
