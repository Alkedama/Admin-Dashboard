import { useState } from 'react'
// import './App.css'

import './scss/App.scss'

import Header from './components/header.jsx'
import SideBar from './components/sidebar.jsx'
import MainContent from './components/mainContent.jsx'
import Icon from '@mdi/react';
import { mdiHomeOutline, mdiCardAccountDetailsOutline, mdiMessageOutline,
  mdiHistory, mdiFileDocumentMultipleOutline, mdiAccountGroupOutline,
  mdiCogOutline, mdiMessageQuestionOutline, mdiShieldCheckOutline, mdiViewDashboardOutline } from '@mdi/js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='containerMain'>
    <Header />
    <SideBar />
    <MainContent />
    </div>
    </>
  )
}

export default App
