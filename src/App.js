import React from "react";
import "./App.css";
import MainTitle from './componets/title/index'
import SearchBar from './componets/search'
import SideMenu from './componets/sidemenu'
import Movies from './componets/movies'

const App = () => {
  return (
    <main className="App">
      <SideMenu/>
      <MainTitle/>
      <SearchBar/>
      <Movies/>
    </main>
  );
};

export default App;
 