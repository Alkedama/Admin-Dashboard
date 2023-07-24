import Icon from '@mdi/react';
import {
  mdiHomeOutline, mdiCardAccountDetailsOutline, mdiMessageOutline,
  mdiHistory, mdiFileDocumentMultipleOutline, mdiAccountGroupOutline,
  mdiCogOutline, mdiMessageQuestionOutline, mdiShieldCheckOutline, mdiViewDashboardOutline
} from '@mdi/js';

const sidebar = () => {
  return (
    <div className='sidebar pt-3 pl-3 pr-20 text-slate-50/100 bg-blue-950/80'>
      <ul className='grid sidebarContent gap-y-8'>
        <div>
          <li className="sidebarItem flex gap-x-1">
            <Icon path={mdiViewDashboardOutline} title="" size={1} />
            <span className='font-bold'>Dashboard</span>
          </li>
        </div>

        <div className='grid gap-y-6 pb-10'>
          <li className="sidebarItem flex gap-x-1">
            <Icon path={mdiHomeOutline} title="Home" size={1} />
            <span>Home</span>
          </li>
          <li className="sidebarItem flex gap-x-1">
            <Icon path={mdiCardAccountDetailsOutline} title="" size={1} />
            <span>Profile</span>
          </li>
          <li className="sidebarItem flex gap-x-1">
            <Icon path={mdiMessageOutline} title="" size={1} />
            <span>Messages</span>
          </li>
          <li className="sidebarItem flex gap-x-1">
            <Icon path={mdiHistory} title="" size={1} />
            <span>History</span>
          </li>
          <li className="sidebarItem flex gap-x-1">
            <Icon path={mdiFileDocumentMultipleOutline} title="" size={1} />
            <span>Tasks</span>
          </li>
          <li className="sidebarItem flex gap-x-1">
            <Icon path={mdiAccountGroupOutline} title="" size={1} />
            <span>Communities</span>
          </li>
        </div>

        <div className='grid gap-y-6'>
          <li className="sidebarItem flex gap-x-1">
            <Icon path={mdiCogOutline} title="" size={1} />
            <span>Settings</span>
          </li>
          <li className="sidebarItem flex gap-x-1">
            <Icon path={mdiMessageQuestionOutline} title="" size={1} />
            <span>Support</span>
          </li>
          <li className="sidebarItem flex gap-x-1">
            <Icon path={mdiShieldCheckOutline} title="" size={1} />
            <span>Privacy</span>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default sidebar