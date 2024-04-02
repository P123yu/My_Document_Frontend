import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { CiUser } from "react-icons/ci";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdFolder } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';

function Folder() {

  const [value,setValue]=useState("");
  const [option,setOption]=useState("");
  const [folderData,setFolderData]=useState("");

  const navigate=useNavigate();

  useEffect(()=>{
    setValue(0);
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //console.log(value,"value..........");

    const location=useLocation();
    const data=location.state.data.option;

    //console.log(data,"location");

  const options1 = ['All', 'Folder'];
  const info=options1.indexOf(data);

  //console.log(info,"info");
  
  const defaultOption1 = options1[info];

  const handleSelect = (selectedOption) => {
      setOption(`${selectedOption.value}`);
  };

  //console.log(option,"option....");

  if(option==='All'){
       navigate("/pdfAll")
  }

  const handleValues=(value)=>{
    axios.get(`http://localhost:8080/pdf/getBydeptId/${value}`)
    .then((response)=>
    {
      setFolderData(response.data);
      navigate("/folderInfo",{state:{data:response.data}});
    });
  }

  const handleDocs=()=>{
    axios.get("http://localhost:8080/myDoc/getByFolder/My Document")
    .then((response)=>
    {
      setFolderData(response.data);
      navigate("/folderInfo",{state:{data:response.data}});
    });

  }

// console.log(folderData,"folderData...");
  
  return (
    <div className=''>
    <div className='flex justify-between mx-2'>
      <h1 className='font-semibold text-xl p-2'>My Document</h1>
    </div>
<div className='flex'>
 <div>
 <Box sx={{ width: '100%' }}>
   <Tabs onChange={handleChange} value={value} selectionFollowsFocus>
       <Tab  label="Company" icon={<HiBuildingOffice className='text-xl'/>} iconPosition='start'/>
       <Tab label="My Documents" icon={<CiUser className='text-xl font-bolder'/>}  iconPosition='start'/>
   </Tabs>
 </Box>
 
  </div>

      <div className='flex items-center ml-28'>
       <h1 className='mx-4'>Select View</h1>
         <Dropdown options={options1} onChange={handleSelect} value={defaultOption1}placeholder="Select an option"/>
       </div>
 
 </div>

 <h1 className='border-b-[1px] border-blue-900 w-96'></h1>

 <h1 className='text-gray-700 mt-5 mb-2 ml-5 font-semibold'>Document Folders</h1>
      <h1 className='border-b-[1px] border-blue-400'></h1>

 {value==0?

 <div>
        <div className='flex flex-row space-x-8 mt-5 mx-5'>
            <div className='flex space-x-2 items-center shadow-lg shadow-blue-300 bg-slate-50 cursor-pointer'>
                <MdFolder className='text-green-400 text-5xl'/>
                <h2 className='text-sm p-2 font-semibold' onClick={()=>handleValues(1)}>HR Policies</h2>
            </div>

            <div className='flex space-x-2 items-center shadow-lg shadow-blue-300 bg-slate-50 cursor-pointer'>
                <MdFolder className='text-green-400 text-5xl'/>
                <h2 className='text-sm p-2 font-semibold' onClick={()=>handleValues(2)}>Business Process</h2>
            </div>

            <div className='flex space-x-2 items-center shadow-lg shadow-blue-300 bg-slate-50 cursor-pointer'>
                <MdFolder className='text-green-400 text-5xl'/>
                <h2 className='text-sm p-2 font-semibold' onClick={()=>handleValues(3)}>HR Forms</h2>
            </div>

            <div className='flex space-x-2 items-center shadow-lg shadow-blue-300 bg-slate-50 cursor-pointer'>
                <MdFolder className='text-green-400 text-5xl'/>
                <h2 className='text-sm p-2 font-semibold' onClick={()=>handleValues(4)}>My Workspace</h2>
            </div>

            <div className='flex space-x-2 items-center shadow-lg shadow-blue-300 bg-slate-50 cursor-pointer'>
                <MdFolder className='text-green-400 text-5xl'/>
                <h2 className='text-sm p-2 font-semibold' onClick={()=>handleValues(5)}>HR Programs</h2>
            </div>
        </div>

  </div>
  :
        <div className='flex flex-row space-x-8 mt-5 mx-5'>
        <div className='flex space-x-2 items-center shadow-lg shadow-blue-300 bg-slate-50 cursor-pointer'>
        <MdFolder className='text-green-400 text-5xl'/>
        <h2 className='text-sm p-2 font-semibold' onClick={handleDocs}>Your Documents</h2>
        </div>
  </div>
  }


</div>
   
  )
}

export default Folder;










