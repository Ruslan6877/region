import React from 'react'
import { Link } from 'react-router-dom';
import { CiDark } from "react-icons/ci";


function Home({data, chageTheme, changeRegion, search, setSearch}) {
    console.log(data);
  return (
    <div className=' bg-white dark:bg-slate-600 text-slate-950 dark:text-white'>
        <div className="flex flex-wrap gap-3 justify-around items-center my-2">
<Link to={`/`}>
        <h1 className="font-bold">Where in the world?</h1>
 </Link>        <input className='border-2 rounded-md text-black' type="text" onChange={(e) => setSearch(e.target.value.toLowerCase())} />


        <select className='border-2 rounded-lg px-2 py-1 text-black ' onChange={e => changeRegion(e)}>
          
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
            <option value="Oceania">Oceania</option>
        </select>

        <button className='border rounded-sm px-3 py-1 flex items-center gap-[1px]' onClick={chageTheme}><CiDark /> dark</button>
      </div>
      <div className=" flex flex-wrap justify-around gap-3">
        {data.map((item, index) => (
          <div className={`${item.name.common.toLowerCase().includes(search) ? 'block' : 'hidden'}`}  key={index}>
            <Link to={`/deteils/${item.name.common}`}>
            <img className="cursor-pointer" src={item.flags.png} alt="" />

            </Link>
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
      </div>
    </div>
  )
}

export default Home