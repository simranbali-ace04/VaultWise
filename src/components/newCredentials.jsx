import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';

const NewCredentials = ({onAddRecord}) => {
    const [siteName, setSiteName] = useState('');
    const [userIdent, setUserIdent] = useState('');
    const [targetUrl, setTargetUrl] = useState('');
    const [passkey, setPasskey] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord ={
            siteName: siteName,
            userIdent: userIdent,
            targetUrl: targetUrl,
            passkey: passkey
        };
        onAddRecord(newRecord); // Pass the new record to the parent component
        console.log("Form Submitted!", { siteName, userIdent, targetUrl, passkey });  
        setSiteName('');
        setUserIdent('');
        setTargetUrl('');
        setPasskey('');      
    }

  return (
    <div className='h-auto md:h-full bg-black border border-[#00FF41] md:w-5/12 w-full flex flex-col rounded-xl overflow-hidden p-4 gap-0.5 font-mono'>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col p-0 gap-0'>
            <h1 className='text-white text-xl md:text-3xl'>Add New Credentials</h1>
            <h1 className='text-[#b6b3b3c1] md:text-xl'>NEW_CREDENTIAL.sh</h1>
            <h1 className='text-[#b6b3b3c1] md:text-xl'>// INJECT NEW RECORD</h1>
        </div>
        <div className="flex-1 flex flex-col justify-around gap-2">
        <div className='flex flex-col md:flex-row items-center md:justify-between p-3'>
            <h1 className='text-white md:text-2xl'>SITE_NAME:</h1>
            <input type="text" placeholder='Enter site name' className='p-1 border-2 rounded-b-sm border-[#b6b3b3c1] bg-[#b6b3b31a] text-white text-xl md:w-60' 
            value={siteName}
            onChange={(e) => {
                setSiteName(e.target.value);
                
                
            }}/>
        </div>
        <div className='flex flex-col md:flex-row items-center md:justify-between p-3 '>
            <h1 className='text-white md:text-2xl'>USER_IDENT:</h1>
            <input type="text" placeholder='Enter username' className='p-1 border-2 rounded-b-sm border-[#b6b3b3c1] bg-[#b6b3b31a] text-white text-xl  md:w-60'
            value={userIdent}
            onChange={(e) => {
                setUserIdent(e.target.value);
            }} />
        </div>
        <div className='flex flex-col md:flex-row items-center md:justify-between p-3'>
            <h1 className='text-white md:text-2xl'>TARGET_URL:</h1>
            <input type="text" placeholder='Enter site url' className='p-1 border-2 rounded-b-sm border-[#b6b3b3c1] bg-[#b6b3b31a] text-white text-xl  md:w-60' 
            value={targetUrl}
            onChange={(e) => {
                setTargetUrl(e.target.value);
            }}/>
        </div>
        <div className='flex flex-col md:flex-row items-center md:justify-between p-3'>
            <h1 className='text-white md:text-2xl'>PASSKEY:</h1>
            <input type="text" placeholder='Enter password' className='p-1 border-2 rounded-b-sm border-[#b6b3b3c1] bg-[#b6b3b31a] text-white text-xl  md:w-60' 
            value={passkey}
            onChange={(e) =>{
                setPasskey(e.target.value);
                
                
            }}/>
        </div>
        </div>
        <div className='flex items-center justify-center'>
            <button className='text-black font-light mt- text-sm md:text-xl bg-[#00FF41] shadow-[0_0_15px_rgba(0,255,65,0.4)] hover:bg-[#00cc33] px-6 py-3.5 rounded-md'>
                <span>[ COMMIT ]</span>
                </button>
        </div>
    </form>
    </div>
  )
}

export default NewCredentials;
