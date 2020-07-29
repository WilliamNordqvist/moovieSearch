import React, { useState } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [searchKeyWord, setsearchKeyWord] = useState();
  const [page, setPage] = useState();
  const [isMobile, setMobile] = useState();
  return (
    <UserContext.Provider
      value={{
        searchKeyWord,
        setsearchKeyWord,
        page,
        setPage,
        isMobile,
        setMobile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
