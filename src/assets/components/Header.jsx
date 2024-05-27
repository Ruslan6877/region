import React from 'react'

function Header() {
  return (
    <header className="flex container mx-auto w-[100%] opacity-1 bg-white  dark:bg-slate-700  flex-wrap gap-3 justify-between items-center  shadow-lg py-3 my-[-13px] px-5 mr-6 fixed">
<Link to={`/`}>
        <h1 className="font-bold text-[20px]">Where in the world?</h1>
 </Link>        
        <button className='border rounded-sm px-3 py-2 flex items-center gap-[1px]' onClick={chageTheme}><CiDark /> dark</button>
      </header>
  )
}

export default Header