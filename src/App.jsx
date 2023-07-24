import { useState } from 'react'
// import './App.css'

import './scss/App.scss'

import Header from './components/header.jsx'
import SideBar from './components/sidebar.jsx'
import MainContent from './components/mainContent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='containerMain h-screen grid'>
    <Header />
    <SideBar />
    <MainContent />
    </div>
    </>
  )
}

export default App
