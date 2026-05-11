import React from 'react'
import Navbar from './components/navbar'
import {Vault} from 'lucide-react'
import LeftContent from './components/leftContent'
import RightContent from './components/rightContent'

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 md:p-10 ">
      <div className="w-full max-w-6xl h-[85vh] max-h-212.5 bg-black border border-[#00FF41] rounded-xl overflow-hidden flex flex-col shadow-2xl">
        <Navbar />
        <div className="flex flex-1 min-h-0 flex-col md:flex-row gap-5 p-4 h-full w-full">
        <LeftContent />
        <RightContent />
        </div>
      </div>
    </div>
  )
}

export default App
