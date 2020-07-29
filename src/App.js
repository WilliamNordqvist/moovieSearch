import React, { useEffect, useContext } from "react";
import "./App.css";
import MainTitle from "./componets/title/index";
import SearchBar from "./componets/search";
import SideMenu from "./componets/sidemenu";
import Movies from "./componets/movies";
import UserContext from "./helpers/context/index";

const App = () => {
  const { setMobile } = useContext(UserContext);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, [setMobile]);

  return (
    <main className="App">
      <SideMenu />
      <MainTitle />
      <SearchBar />
      <Movies />
    </main>
  );
};

export default App;
