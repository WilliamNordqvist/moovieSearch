/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as Styled from './style'

const Hamburger = ({open, setOpen, setPage}) => {
  return (
    <Styled.Hamburger open={open} onClick={() => {setOpen(!open); setPage();}}>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </Styled.Hamburger>
  );
};

export default Hamburger;
