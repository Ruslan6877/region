import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiDark } from "react-icons/ci";
// import {Loader} from "../loading/8.svg"

function Deteils({ chageTheme }) {
  const { name } = useParams();
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  const fetchData = async (api) => {
    fetch(api)
      .then((data) => data.json())
      .then((json) => {
        setData(json[0]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(`https://restcountries.com/v3.1/name/${name}`);
  }, []);

  console.log(data);
  return (
    <div className="container py-20 mx-auto px-3 text-white dark:text-black bg-slate-600 dark:bg-white">
      {loading || !data ? (
        <div class="ml-[530px] my-28 loader w-[200px] h-[200px] border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
      ) : (
        <div>
          
          <div className="flex items-center justify-between container">
            <Link to={"/"}>
              <button className="border    px-5 py-1 rounded-sm flex items-center gap-3 mt-[70px] ">
                <IoIosArrowRoundBack /> back
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-[120px]  justify-center my-[80px]">
            {/* <Loader/> */}
            <img src={data?.flags.png} className=" h-[300px]" alt="" />

            <div className="flex  items-center mt-4 gap-2 justify-around">
              <div>
                <h1 className="font-bold ">
                  Native Name:{" "}
                  <span className="font-normal">{data?.name.common}</span>
                </h1>
                <p className="font-bold ">
                  <span className="font-normal">{data?.altSpellings[1]}</span>
                </p>
                <p className=" font-bold">
                  population:{" "}
                  <span className="font-normal">{data?.population}</span>
                </p>
                <p className="font-bold ">
                  region: <span className="font-normal">{data?.region}</span>
                </p>
                <p className="font-bold ">
                  subregion:{" "}
                  <span className="font-normal">{data?.subregion}</span>
                </p>
                <p className="font-bold ">
                  capital: <span className="font-normal">{data?.capital}</span>
                </p>
                {/* <p className="font-bold ">
                  Border Countries: {data?.borders[0]} {data?.borders[1]}
                </p> */}
              </div>
              <div>
                <p className="font-bold ">
                  Top Level Domain:{" "}
                  <span className="font-normal">{data?.tld}</span>
                </p>
                <p className="font-bold ">
                  languages:{" "}
                  <span className="font-normal">{data?.languages.ron}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Deteils;
