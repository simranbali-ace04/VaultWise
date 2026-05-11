import React from 'react'
import { Eye, EyeOff } from 'lucide-react';

const NewCredentials = () => {
  return (
    <div className='h-full bg-black border border-[#00FF41] w-5/12 flex flex-col rounded-xl overflow-hidden p-4 gap-0.5 font-mono'>
        <div className='flex flex-col p-0 gap-0'>
            <h1 className='text-white text-xl md:text-3xl'>Add New Credentials</h1>
            <h1 className='text-[#b6b3b3c1] md:text-xl'>NEW_CREDENTIAL.sh</h1>
            <h1 className='text-[#b6b3b3c1] md:text-xl'>// INJECT NEW RECORD</h1>
        </div>
        <div className='flex flex-row items-center justify-between p-3'>
            <h1 className='text-white md:text-2xl'>SITE_NAME:</h1>
            <input type="text" placeholder='Enter site name' className='p-1 border-2 rounded-b-sm border-[#b6b3b3c1] bg-[#b6b3b31a] text-white text-xl w-full md:w-60' />
        </div>
        <div className='flex flex-row items-center justify-between p-3 '>
            <h1 className='text-white md:text-2xl'>USER_IDENT:</h1>
            <input type="text" placeholder='Enter username' className='p-1 border-2 rounded-b-sm border-[#b6b3b3c1] bg-[#b6b3b31a] text-white text-xl w-full md:w-60' />
        </div>
        <div className='flex flex-row items-center justify-between p-3'>
            <h1 className='text-white md:text-2xl'>TARGET_URL:</h1>
            <input type="text" placeholder='Enter site url' className='p-1 border-2 rounded-b-sm border-[#b6b3b3c1] bg-[#b6b3b31a] text-white text-xl w-full md:w-60' />
        </div>
        <div className='flex flex-row items-center justify-between p-3'>
            <h1 className='text-white md:text-2xl'>PASSKEY:</h1>
            <input type="text" placeholder='Enter password' className='p-1 border-2 rounded-b-sm border-[#b6b3b3c1] bg-[#b6b3b31a] text-white text-xl w-full md:w-60' />
        </div>

        <div className='flex items-center justify-center'>
            <button className='text-black font-light mt-8 text-xl bg-[#00FF41] shadow-[0_0_15px_rgba(0,255,65,0.4)] hover:bg-[#00cc33] px-6 py-3.5 rounded-md'>
                <span>[ COMMIT ]</span>
                </button>
        </div>
    </div>
  )
}

export default NewCredentials;
