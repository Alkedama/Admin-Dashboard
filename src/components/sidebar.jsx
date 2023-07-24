import Icon from '@mdi/react';
import { mdiHomeOutline, mdiCardAccountDetailsOutline, mdiMessageOutline,
  mdiHistory, mdiFileDocumentMultipleOutline, mdiAccountGroupOutline,
  mdiCogOutline, mdiMessageQuestionOutline, mdiShieldCheckOutline, mdiViewDashboardOutline } from '@mdi/js';

const sidebar = () => {
  return (
    <div className='sidebar col-auto'>
      <ul>
        <li className="sidebarItem flex">
          <Icon path={mdiViewDashboardOutline} title="" size={1} />
          <span>Dashboard</span>
          </li>
        <li className="sidebarItem flex">
          <Icon path={mdiHomeOutline} title="Home" size={1} />
          <span>Home</span>
        </li>
        <li className="sidebarItem flex">
          <Icon path={mdiCardAccountDetailsOutline} title="" size={1} />
          <span>Profile</span>
        </li>
        <li className="sidebarItem flex">
          <Icon path={mdiMessageOutline} title="" size={1} />
          <span>Messages</span>
        </li>
        <li className="sidebarItem flex">
          <Icon path={mdiHistory} title="" size={1} />
          <span>History</span>
        </li>
        <li className="sidebarItem flex">
          <Icon path={mdiFileDocumentMultipleOutline} title="" size={1} />
          <span>Tasks</span>
        </li>
        <li className="sidebarItem flex">
          <Icon path={mdiAccountGroupOutline} title="" size={1} />
          <span>Communities</span>
        </li>
        <li className="sidebarItem flex">
          <Icon path={mdiCogOutline} title="" size={1} />
          <span>Settings</span>
        </li>
        <li className="sidebarItem flex">
          <Icon path={mdiMessageQuestionOutline} title="" size={1} />
          <span>Support</span>
        </li>
        <li className="sidebarItem flex">
          <Icon path={mdiShieldCheckOutline} title="" size={1} />
          <span>Privacy</span>
        </li>
      </ul>
    </div>
  )
}

export default sidebar