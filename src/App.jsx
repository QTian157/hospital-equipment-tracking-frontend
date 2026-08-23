import { useState, useEffect } from 'react'
import './App.css'
import {Footer} from './components/layout/Footer'
import {Header} from './components/layout/Header'
import {Sidebar} from './components/layout/Sidebar'
import {Routes, Route, Navigate} from 'react-router'
import AboutPage from './components/pages/AboutPage'
import DashboardPage from './components/pages/DashboardPage'
import EquipmentListPage from './components/pages/equipment/EquipmentListPage'
import EquipmentDetailPage from './components/pages/equipment/EquipmentDetailPage'
import ErrorPage from './components/pages/ErrorPage'

import EquipmentEditPage from './components/pages/equipment/EquipmentEditPage'
import EquipmentAddPage from './components/pages/equipment/EquipmentAddPage'

import Equipment from './classes/Equipment';


const parseJSONText = (rawText, dataName) => {
  try{
    return JSON.parse(rawText)
  }catch{
    throw new Error(
      `Unable to parse ${dataName}. Google Docs export uses plain text and should contain valid JSON.`,
    )
  }
}

function App() {
  const [equipmentList, setEquipmentList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [equipListError, setEquipListError] = useState(null)
  
  // useEffect(callback, dependencies);
  // callback: 1. cleanup function or 2. no return
  useEffect(()=>{
    
    const fetchEquipmentList = async ()=>{
      let equipmentList = [];
      try{
        // define fetch()
        const response = await fetch (
          'https://docs.google.com/document/d/1gUxxzGJCf40UcwYjiNgeVergYB0qeN2wC6JaAb1nJjE/export?format=txt'
        );
        if (!response.ok) {
          throw new Error(`Unable to retrieve equipment list (status ${response.status}).`);
        }
        // await new Promise((resolve) => setTimeout(resolve, 3000)); 
        // test the loading
        const rawText = await response.text();
        const data = parseJSONText(rawText, 'equipmentList');
        
        equipmentList = data.map((equip) => {
          let newEquipment = new Equipment(
            equip.id,
            equip.name,
            equip.assetTag,
            equip.serialNumber,
            equip.type,
            equip.category,
            equip.status,
            equip.department,
            equip.room,
            equip.mobile,
          );
          return newEquipment
        })

        // console.log(equipmentList)
        // Clear any previous error when fetch succeeds
        setEquipListError(null);
      }catch(error){
        console.error(error.message);
        setEquipListError(error.message);

      }finally{
        setEquipmentList(equipmentList);
      }
    }
    // call fetch()
    fetchEquipmentList();
  }, [])

  useEffect(()=>{
    if(isLoading && equipmentList != null) {
      setIsLoading(false);
    }
  }, [isLoading, equipmentList])


  return (
    <div id="body-container">
      <Header />

      <div className="page-container">
        <Sidebar />

        <Routes>
          <Route path="/" element={ <DashboardPage equipmentList={equipmentList}/>}/>
          <Route 
            path="/equipmentList" 
            element={
              <EquipmentListPage 
                equipmentList={equipmentList} 
                isLoading={isLoading} 
                equipListError={equipListError}
              />
            }
          />
          <Route path="/about" element={ <AboutPage />}/>
          <Route 
            path="/equipment/details/:id" 
            element={
              <EquipmentDetailPage 
                equipmentList={equipmentList}
                isLoading={isLoading}
                equipListError={equipListError}
                setEquipmentList={setEquipmentList}
              />
            } 
          />
          <Route 
            path="/equipment/details/:id/edit" 
            element={
              <EquipmentEditPage 
                equipmentList={equipmentList}
                isLoading={isLoading}
                equipListError={equipListError}
                setEquipmentList={setEquipmentList}
              />
              
            } 
          
          />

          <Route 
            path="/equipment/add" 
            element={
              <EquipmentAddPage 
                equipmentList={equipmentList}
                isLoading={isLoading}
                equipListError={equipListError}
                setEquipmentList={setEquipmentList}
              />
              
            } 
          
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
