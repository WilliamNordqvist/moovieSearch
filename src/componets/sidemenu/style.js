import styled from "styled-components";

export const SideMenu = styled.div `
  height:calc(100% - 5px);
  transition: 0.4s;
  width:${props => props.open ? "55px" : "0"};
  position:fixed;
  top:0px;
  left:0; 
  background:#BFBFBF;
  height:100vh;
  z-index:101;
`;

export const IconsContainer = styled.div `
height: 100%;
width:100%;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
opacity: ${props => props.open ? "1" : "0"};
transition: 0.2s;

.icon {
  margin: 20% 0;
}

`;