import React, { useState, useContext } from "react";
import * as Styled from "./style";
import Hamburger from "./hamburger";
import Icon from "../icon/index";
import UserContext from "../../helpers/context/index"; 

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { page, setPage } = useContext(UserContext);
  return (
    <Styled.SideMenu open={open}>
      <Hamburger open={open} setOpen={setOpen} setPage={setPage} />
      <Styled.IconsContainer open={open}>
        <Icon
          name="filled-star"
          color={page === 'favorite' ? '#d4af37' : "#1D1D1D"}
          onClick={page !== 'favorite' ? () => setPage('favorite') : () => setPage()}
        />
        <Icon
          name="plus"
          color={page === 'watchlist' ? '#d4af37' : "#1D1D1D"}
          onClick={page !== 'watchlist' ? () => setPage('watchlist') : () => setPage()}
        />
      </Styled.IconsContainer>
    </Styled.SideMenu>
  );
};

export default Menu;
