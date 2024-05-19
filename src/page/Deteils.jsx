import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiDark } from "react-icons/ci";


function Deteils({chageTheme}) {
  const { name } = useParams();
  const [data, setData] = useState();




  


  const [loading, setLoading] = useState(true);

  const fetchData = async (api) => {
    fetch(api)
      .then((data) => data.json())
      .then((json) => {
        setData(json);
        setLoading(false)
      });
  };

  useEffect(() => {
    fetchData(`https://restcountries.com/v3.1/name/${name}`);
  }, []);

  console.log(data);
  return (
    <div className="container py-20 mx-auto px-3 text-white dark:text-black bg-slate-600 dark:bg-white">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          
          <div className="flex items-center justify-between">
          <Link to={"/"}>
            <button className="border    px-5 py-1 rounded-sm flex items-center gap-3 mt-[70px] ">
              <IoIosArrowRoundBack /> back
            </button>
          </Link>
          <button className="border rounded-sm px-3 py-1 mt-16 flex items-center gap-[1px]" onClick={chageTheme}><CiDark /> dark</button>
          </div>
          <div className="flex flex-wrap gap-3 items-center justify-around my-[80px]">
            <img src={data[0].flags.png} alt="" />
            <div className="flex  items-center justify-around">
              <div>
                <h1  className=" ">Native Name: {data[0].name.common}</h1>
                <p className=" ">{data[0].altSpellings[1]}</p>
                <p className=" ">population: {data[0].population}</p>
                <p className=" ">region: {data[0].region}</p>
                <p className=" ">subregion: {data[0].subregion}</p>
                <p className=" ">capital: {data[0].capital}</p>
                <p className=" ">
                  Border Countries: {data[0].borders[0]} {data[0].borders[1]}
                </p>
              </div>
              <div>
                <p className=" ">Top Level Domain: {data[0].tld}</p>
                <p className=" ">languages: {data[0].languages.ron}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Deteils;
