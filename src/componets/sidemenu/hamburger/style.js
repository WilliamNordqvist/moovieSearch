import styled from "styled-components";

export const Hamburger = styled.div `
position :  absolute;
top:10px;
left: 10px;
z-index: 99;
cursor: pointer;

div{
  width: 35px;
  height: 5px;
  background-color: ${props => props.open ? "#1D1D1D" : "#BFBFBF"};
  margin: 6px 0;
  transition: 0.4s;
}

.one {
  -webkit-transform: ${props => props.open ? " rotate(-45deg) translate(-9px, 6px)" : "rotate(0) translate(0px, 0px)"};
  transform:${props => props.open ? " rotate(-45deg) translate(-9px, 6px)" : "rotate(0) translate(0px, 0px)"};
}
.two {
 opacity:${props => props.open ? '0' : '1'};
}

.three {
  -webkit-transform: ${props => props.open ? " rotate(-45deg) translate(-8px, -8px)" : "rotate(0) translate(0px, 0px)"};
  transform:${props => props.open ? " rotate(45deg) translate(-9px,-7px)" : "rotate(0) translate(0px, 0px)"};
}

`;