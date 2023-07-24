import Icon from '@mdi/react';
import { mdiMagnify, mdiBellRingOutline } from '@mdi/js';


const header = () => {
  return (
    <div className='header'>
    
    <label className='relative block'>
    <span className='sr-only'>Search</span>
    <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
    <button><Icon path={mdiMagnify} size={1} /></button>
    </span>
    <input className='placeholder: italic placeholder:text-slate-400 block bg-white
    w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none
    focus:border-sky-500 focus:ring-1 sm:text-sm' placeholder='Search...' type='text' name='search' />
    </label> 
    <Icon path={ mdiBellRingOutline } size={1} />
     ProfileImage Kristian Rex Sazon
      <div className='nav'>
          <ul>
              <li className='navItems'>ProfileImage</li>
              <li className='navItems'>Hi there, Kristian Rex Sazon (@krsazon)</li>
              <li className='navItems'>New</li>
              <li className='navItems'>Upload</li>
              <li className='navItems'>Share</li>
          </ul>
      </div>
    </div>
  )
}

export default header