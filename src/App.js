import React, { useEffect ,useContext } from "react";
import "./App.css";
import MainTitle from './componets/title/index'
import SearchBar from './componets/search'
import SideMenu from './componets/sidemenu'
import Movies from './componets/movies'
import UserContext from "./helpers/context/index"; 

const App = () => {
  const { device, setDevice } = useContext(UserContext);
  const { innerWidth: width  } = window;
  



  useEffect(()=>{

    function handleResize() {
      if(width<1000){
        setDevice('mobile')
      } else {
        setDevice('desktop')
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);


  },[])
  console.log(window.innerWidth)
  console.log(device)

  // console.log(device)
  
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
 