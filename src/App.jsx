import { useState } from 'react'
import './App.css'
import {Footer} from './components/layout/Footer'
import {Header} from './components/layout/Header'
import {Sidebar} from './components/layout/Sidebar'
import {Routes, Route, Navigate} from 'react-router'
import AboutPage from './components/pages/AboutPage'
import DashboardPage from './components/pages/DashboardPage'
import EquipmentListPage from './components/pages/equipment/EquipmentListPage'



function App() {
  return (
    <div id="body-container">
      <Header />

      <div className="page-container">
        <Sidebar />
        
        <Routes>
          <Route path="/" element={ <DashboardPage />}/>
          <Route path="/equipment" element={<EquipmentListPage />}/>
          <Route path="/about" element={ <AboutPage />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
