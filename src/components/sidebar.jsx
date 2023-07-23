import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';

const sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li className="sidebarItem">Dashboard</li>
        <li className="sidebarItem flex">
          <Icon path={mdiHome} title="User Profile" size={1} color="black" spin />
         <span>Home</span>
        </li>
        <li className="sidebarItem">Profile</li>
        <li className="sidebarItem">Messages</li>
        <li className="sidebarItem">History</li>
        <li className="sidebarItem">Tasks</li>
        <li className="sidebarItem">Communities</li>
        <li className="sidebarItem">Settings</li>
        <li className="sidebarItem">Support</li>
        <li className="sidebarItem">Privacy</li>
      </ul>
    </div>
  )
}

export default sidebar