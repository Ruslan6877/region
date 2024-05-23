import React from 'react'
import { Link } from 'react-router-dom';
import { CiDark } from "react-icons/ci";


function Home({data, chageTheme, changeRegion, search, setSearch}) {
    console.log(data);
  return (
    <div className='container mx-auto py-3 bg-white dark:bg-slate-600 text-slate-950 dark:text-white'>
        <header className="flex container mx-auto w-[100%] opacity-1 bg-white  dark:bg-slate-700  flex-wrap gap-3 justify-between items-center  shadow-lg py-6 my-[-13px] px-1 mr-6 fixed">
<Link to={`/`}>
        <h1 className="font-bold text-[20px]">Where in the world?</h1>
 </Link>        
        <button className='border rounded-sm px-3 py-1 flex items-center gap-[1px]' onClick={chageTheme}><CiDark /> dark</button>
      </header>
      <div className='flex flex-wrap gap-3 justify-between px-1 mt-[100px] mb-4'>
        <input className='border-2 w-[300px] rounded-md text-black' type="text" placeholder='Search for a country…' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <select className='border rounded-lg px-2 py-1 text-black ' onChange={(e) => changeRegion(e)}>
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
          <option value="Oceania">Oceania</option>
      </select>

        </div>
      <div className=" flex flex-wrap justify-between  gap-3">
        {data.map((item, index) => (
          <div className={`shadow-md px-1 my-2 w-[280px] rounded-md ${item.name.common.toLowerCase().includes(search) ? 'block' : 'hidden'}`}  key={index}>
            <Link to={`/deteils/${item.name.common}`}>
            <img className="cursor-pointer h-[160px] w-[280px]  " src={item.flags.png} alt="" />

            </Link>
            <div className='px-1 py-1'>
            <h2 className="font-bold text-[20px] ml-4">{item.name.common}</h2>
              <p>
                <span className="font-bold">population:</span> {item.population}
              </p>
              <p className='my-2'>
                <span className="font-bold">region:</span> {item.region}
              </p>
              <p>
                <span className="font-bold">capital:</span> {item.capital}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home