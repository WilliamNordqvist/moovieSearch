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
  border: none;
`;

export const MovieOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) 40%);
  transform: translateY(100px);
  transition: 0.3s all ease-in-out;
  z-index: 99;

  .MovieTitle {
    width: 90%;
    height: 70%;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20%;
    h2,
    p {
      margin:0;
      color: #ececec;
      text-align: center;
    }
  }

  .MovieIcons {
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      margin: 0 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    transform: translateY(0px);
    h2 {
      font-size: 25px;
      width: 100%;
    }
    p {
      font-size: 15px;
    }
  }
`;


export const MovieCardContainer = styled.div`
  position: relative;
  width: 193px;
  height: 300px;
  background: #ececec;
  overflow: hidden;
  border-radius: 10px;
  margin: 10px 5px;
  padding: 10px;
  transition: 0.3s all ease;
  border: none;
  cursor: pointer;

  &:hover ${MovieCard} {
    transform: scale(1.03);
  }

  &:hover ${MovieOverlay} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(0px);

    @media only screen and (max-width: 600px) {
      transform: translateY(0px);
    }
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1),
      0 2px 2px rgba(255, 255, 255, 0.1), 0 4px 4px rgba(255, 255, 255, 0.1),
      0 8px 8px rgba(255, 255, 255, 0.1), 0 16px 16px rgba(255, 255, 255, 0.1);
  }
`;
