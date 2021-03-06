import styled from 'styled-components';

export const OverlayContainer = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
overflow: scroll;
opacity: ${props => props.SelectedMovie ? '1' : '0'};
z-index: ${props => props.SelectedMovie ? '100' : '-1'};
display: flex;
justify-content: center;
align-items: center;
visibility:${props => props.SelectedMovie ? 'viseble' : 'hidden'};

@media only screen and (max-width: 600px) {
  z-index: 102;  
}
`;

export const OverlayWindow = styled.div`
position: relative;
width: 80%;
max-width: 1300px;
height: 90%;
background: rgba(236, 236, 236, 0.99);
border-radius: 5px;
overflow: scroll;
.icon {
  position: absolute; 
  top: 10px; 
  right: 10px;
}
@media only screen and (max-width: 600px) {
  width:100%;
  height:100%;
  border-radius:0;
  
}


`;


export const Content = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 7%;
padding: 0 5%;
font-family: 'Nunito',sans-serif;
img {
  width: 40%;
  max-width:350px;
}

.movie-title{
  text-transform: uppercase;
  margin-bottom:0;
}
.movie-releasedate, .movie-rating {
  margin: 0 auto;
  font-size: 12px;
}
`;