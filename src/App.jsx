import React, { useState } from 'react'
import Navbar from './components/navbar'
import {Vault} from 'lucide-react'
import LeftContent from './components/leftContent'
import RightContent from './components/rightContent'
import { Trash } from "lucide-react";

const App = () => {

  const [vaultData, setVaultData] = useState([]);
  const addRecord = (record) => {
    setVaultData([...vaultData, record]);
  }
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 md:p-10 ">
      <div className="w-full max-w-6xl h-auto md:h-[85vh] bg-black border border-[#00FF41] rounded-xl overflow-hidden flex flex-col shadow-2xl">
        <Navbar />
        <div className="flex flex-col md:flex-row gap-5 p-4 flex-1 overflow-y-auto md:overflow-hidden min-h-0 w-full no-scrollbar">
        <LeftContent/>
        <RightContent/>
        </div>
      </div>
    </div>
  )
}

export default App
