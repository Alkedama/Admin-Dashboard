import Icon from '@mdi/react';
import { mdiMagnify, mdiBellRingOutline } from '@mdi/js';
import ProfileImage from './../assets/rudra.svg';


const header = () => {
  return (
    <div className='header p-5 bg-slate-50/100 shadow-lg shadow-cyan-100/80'>

      <div className='col-start-1 col-end-3'>
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

      <div className='col-start-3 col-end-4 place-self-end'>
        <div className='flex items-center gap-x-4'>
          <button>
            <Icon path={mdiBellRingOutline} size={1} />
          </button>
          <button className='flex items-center gap-x-4'>
            <img src={ProfileImage} className='rounded-full w-12 h-12' alt='Profile Image' />
            <span className='font-bold'>Kristian Rex Sazon</span>
          </button>
        </div>
      </div>

      <div className='col-start-1 col-end-2 row-start-2 row-end-4'>
        <img src={ProfileImage} className='rounded-full w-24 h-24' alt='Profile Image' />
      </div>

      <div className='col-start-2 col-end-3 self-end pl-3'>
        <span className='font-semibold'>Hi there,</span>
      </div>

      <div className='col-start-2 col-end-3 pl-3'>
        <span className='font-bold'>Kristian Rex Sazon (@krsazon)</span>
      </div>

      <div className='grid items-center justify-items-end col-start-3 col-end-4 row-start-2 row-end-4'>
        <ul className='flex gap-x-4'>
          <li className='navItems'>
            <button className='bg-sky-500/75 rounded-full w-20 h-9 text-slate-50/100'>New</button>
            </li>
          <li className='navItems'>
            <button className='bg-sky-500/75 rounded-full w-20 h-9 text-slate-50/100'>Upload</button>
          </li>
          <li className='navItems'>
            <button className='bg-sky-500/75 rounded-full w-20 h-9 text-slate-50/100'>Share</button>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default header