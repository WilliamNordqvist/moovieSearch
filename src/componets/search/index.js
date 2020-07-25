import React, { useContext } from "react";
import * as Styled from "./style";
import UserContext from "../../helpers/context/index"; 

const SearchBar = () => {
  const { serachKeyWord, setSerachKeyWord } = useContext(UserContext);
  return (
    <Styled.SearchBar>
      <input placeholder="Search Moovie" value={serachKeyWord} onChange={(e) => setSerachKeyWord(e.target.value)}/>
    </Styled.SearchBar>
  );
};

export default SearchBar;
