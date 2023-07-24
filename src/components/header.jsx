import Icon from '@mdi/react';
import { mdiMagnify, mdiBellRingOutline } from '@mdi/js';
import ProfileImage from './../assets/rudra.svg';


const header = () => {
  return (
    <div className='header'>
    
    <div className="flex place-content-between">
      <div className='flex items-center pl-5'>
        <label className='relative block'>
        <span className='sr-only'>Search</span>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
        <button><Icon path={mdiMagnify} size={1} /></button>
        </span>
        <input className='placeholder: italic placeholder:text-slate-400 block bg-white
        w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none
        focus:border-sky-500 focus:ring-1 sm:text-sm' placeholder='Search...' type='text' name='search' />
        </label>
      </div>

      <div className='flex items-center gap-4 pr-5'>
        <Icon path={ mdiBellRingOutline } size={1} />
         <img src={ ProfileImage } className='rounded-full w-12 h-12' alt='Profile Image'/>
          <span>Kristian Rex Sazon</span>
      </div>
    </div>

      <div className='nav'>
          <ul className='grid grid-cols-2'>
              <div className=''>
                <li className='navItems'>
                  <img src={ ProfileImage } className='rounded-full w-24 h-24' alt='Profile Image'/>
                </li>
                <li className='navItems'>
                <span>Hi there,</span> 
                <span>Kristian Rex Sazon (@krsazon)</span></li>
              </div>
              <div>
                <li className='navItems'>New</li>
                <li className='navItems'>Upload</li>
                <li className='navItems'>Share</li>
              </div>
          </ul>
      </div>
    </div>
  )
}

export default header