import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Routes , Route} from 'react-router-dom';
import Home from "./page/Home";
import Deteils from "./page/Deteils";
import { CiDark } from "react-icons/ci";
import Header from "./assets/components/Header";

function App() {

  const storedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)

    if (theme === 'dark') {
    document.documentElement.classList.add('dark')      
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const chageTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }


  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  console.log(search);

  const fetchData = async (api) => {
    fetch(api)
      .then((data) => data.json())
      .then((json) => {
        setData(json);
        
      });
  };

  
  useEffect(() => {
    fetchData("https://restcountries.com/v3.1/all");
  }, []);


  



  const changeRegion = (e) =>{
    fetchData(`https://restcountries.com/v3.1/region/${e.target.value}`)
  }
  return (
    <div className=" container mx-auto">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home data={data} changeRegion={changeRegion} theme={theme} setTheme={setTheme} chageTheme={chageTheme} search={search} setSearch={setSearch}/>}></Route>
        <Route path='/deteils/:name' element={<Deteils chageTheme={chageTheme} theme={theme} setTheme={setTheme} />}></Route>
      </Routes>
      </BrowserRouter>
      {/* <div className="flex">
        <h1 className="font-bold">Where in the world?</h1>
        <input type="text" onChange={(e) => setSearch(e.target.value.toLowerCase())} />


        <select onChange={e => changeRegion(e)}>
          
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
            <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className=" flex flex-wrap justify-around gap-3">
        {data.map((item, index) => (
          <div className={`${item.name.common.toLowerCase().includes(search) ? 'block' : 'hidden'}`}  key={index}>
            <img className="cursor-pointer" src={item.flags.png} alt="" />
            <h2 className="font-bold ">{item.name.common}</h2>
            <div>
              <p>
                <span className="font-bold">population:</span> {item.population}
              </p>
              <p>
                <span className="font-bold">region:</span> {item.region}
              </p>
              <p>
                <span className="font-bold">capital:</span> {item.capital}
              </p>
            </div>
          </div>
        ))}
      </div> */}
      
      
    </div>
  );
}

export default App;
