import React, { useContext } from "react";
import * as Styled from "./style";
import UserContext from "../../helpers/context/index"; 

const SearchBar = () => {
  const { searchKeyWord, setsearchKeyWord } = useContext(UserContext);
  return (
    <Styled.SearchBar>
      <input placeholder="Search Movie" value={searchKeyWord} onChange={(e) => setsearchKeyWord(e.target.value)}/>
    </Styled.SearchBar>
  );
};

export default SearchBar;
