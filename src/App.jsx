import { useState } from 'react'
import './App.css'
import {Footer} from './components/layout/Footer'
import {Header} from './components/layout/Header'
// import {Sidebar} from './components/layout/Sidebar'


function App() {
  return (
    <div id="body-container">
      <Header />
      {/* <Sidebar /> */}
      <Footer />
    </div>
  )
}

export default App
