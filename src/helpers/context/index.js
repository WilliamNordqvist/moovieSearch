import React, { useState } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [serachKeyWord, setSerachKeyWord] = useState();
  const [page, setPage] = useState();
  return (
    <UserContext.Provider
      value={{
        serachKeyWord,
        setSerachKeyWord,
        page,
        setPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
