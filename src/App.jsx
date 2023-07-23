import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import './scss/App.scss'

import Header from './components/header.jsx'
import SideBar from './components/sidebar.jsx'
import MainContent from './components/mainContent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainContainer'>
    <Header />
    <SideBar />
    <MainContent />
    </div>
    </>
  )
}

export default App
