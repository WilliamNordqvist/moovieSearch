import styled from "styled-components";



export const MovieCard = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${(props) =>
    props.poster_path
      ? "url(" + props.image + ")"
      : "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/500px-No_image_available.svg.png)"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: 0.3s all ease;
  border:none;
  

`;

export const MovieOverlay = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0),
      rgba(0, 0, 0, 0.6) 40%
    );
    transform: translateY(100px);
    transition: 0.3s all ease-in-out;
    z-index:99;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    
    h2, p{ 
      color:#ececec;
      margin:0 10px;
      padding:0;
      text-align:center;
    }

    @media only screen and (max-width: 600px) {
      transform: translateY(80px);
      h2 {
        font-size:16px;
      }
      p{
        font-size:12px;
      }
    }
`;

export const MovieIcons = styled.div`
  width: 100%;
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content:center;
  div {
    margin: 0 10px;
  }
  @media only screen and (max-width: 600px) {
    top:200px;
  }
`;

export const MovieCardContainer = styled.div`
  position:relative;
  width: 193px;
  height: 300px;
  background: #ececec;
  overflow: hidden;
  border-radius: 10px;
  margin: 10px 5px;
  padding: 10px;
  transition: 0.3s all ease;
  border:none;
  cursor:pointer;
  

  &:hover ${MovieCard} {
    transform: scale(1.03);
    
  }

  &:hover ${MovieOverlay} {
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    transform: translateY(0px);
    @media only screen and (max-width: 600px) {
      transform:translateY(100px);
    }
    
  }
  &:hover {
    transform:translateY(-2px);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
      0 2px 2px rgba(255, 255, 255, 0.1), 0 4px 4px rgba(255, 255, 255, 0.1),
      0 8px 8px rgba(255, 255, 255, 0.1), 0 16px 16px rgba(255, 255, 255, 0.1);
  }
`;

