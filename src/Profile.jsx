import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
function Profile() {
  return (
    <div className='bg-white p-6 rounded-3xl mx-6 mt-10'>

        <div className='pb-5'>
            <div className='flex space-x-32p-2 mx-16 ml-24 rounded-lg bg-blue-400 font-semibold text-md p-2'>
                <div className='flex ml-24 space-x-16'>
                        <p className='text-yellow-200'>Edit Profile</p>
                        <p className='text-yellow-200'>Personal Settings</p>
                </div>
            </div>
            <div className='w-1/12 ml-[1100px] mt-2'>
                <p className='border-[1px] border-blue-800 text-center'>Action</p>
            </div>
        </div>

        <div className=''>
           <div className='grid grid-cols-12'>
                   <div className='col-span-3  w-[250px]'>
          <div className=''>
          <img src= '/src/assets/download.jpg' className='w-[130px] h-[130px] rounded-full ml-20'/>

<div className='ml-[70px]'>
 <p className='text-blue-900 text-2xl font-semibold'>preeti sharma Lorem ipsum dolor</p>
 <p className='text-gray-700 text-lg'>senior java developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus doloremque voluptatibus fuga beatae libero sequi earum, iste temporibus illum.</p>
</div>
          </div>
                   



                   </div>

                   <div className='col-span-9'>
                    <div className=''>
                        <div className="grid grid-cols-2 -ml-10">
                               <div className="col-span-1">
                                <div className="grid grid-cols-2 gap-x-5">
                                    <div className="col-span-1 ">
                                       <div className='font-medium'>
                                           <p className='text-gray-500 '>Employee ID</p>
                                           <p className='text-blue-800'>12345 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, qui.</p>
                                       </div>

                                       <div className='font-medium mt-3'>
                                           <p className='text-gray-500'>Department Lorem, </p>
                                           <p className='text-blue-800'>Sofware Solutions & Delivery .</p>
                                       </div>

                                    </div>

                                    <div className="col-span-1 ">
                                    <div className='font-medium'>
                                       <p className='text-gray-500'>Contact No</p>
                                           <p className='text-blue-800'>123458</p>

                                       </div>

                                       <div className='font-medium mt-3'>
                                       <p className='text-gray-500'>Reporting to</p>
                                           <p className='text-blue-800'>harish kumar </p>

                                       </div>

                                    </div>

                                </div>
                                  

                                  


                               </div>


                               <div className="col-span-1">

                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 w-[230px]">
                                    <div className='font-medium'>
                                           <p className='text-gray-500'>Email</p>
                                           <p className='text-blue-800'>P@gmail.com </p>
                                       </div>

                                       <div className='mt-3 font-medium'>
                                    <p className='text-gray-500'>Employee Status</p>
                                       <div className='flex space-x-4 items-center text-green-600'>
                                           <p className='text-green'><FaRegCheckCircle /></p>
                                           <p>Confirmed</p>
                                       </div>
                                </div>

                                    </div>

                                    <div className="col-span-1">
                                    <div className='font-medium'>
                                       <p className='text-gray-500'>Location</p>
                                           <p className='text-blue-800'>Bangalore </p>
                                       </div>
                                    </div>

                                </div>

                               </div>



                                                    </div>
                    </div>
                    <div className='border-b-[1px] border-blue-900 -ml-10 mt-7 w-[930px]'></div>
                    <div className='mt-5'>
                    <div className="grid grid-cols-2 -ml-10">
                               <div className="col-span-1">
                                <h2 className='font-semibold'>About me</h2>
                                <p className='text-sm text-gray-500'>12 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, quod omnis fugiat eligendi voluptatem perspiciatis! Magnam architecto, consequatur explicabo accusantium temporibus nisi distinctio recusandae doloremque ea animi! Eveniet saepe nobis eius dolore hic asperiores dolores quod veritatis ipsam! Soluta voluptatibus consequuntur incidunt blanditiis voluptas rerum architecto voluptate modi possimus? Debitis?</p>
                               </div>
                               <div className="col-span-1">
                                <div className="grid grid-cols-10">
                                  <div className="col-span-7">
                                  <p className='font-semibold'>Skills</p>
                                     <div className="grid grid-cols-4 text-blue-950 gap-y-3 gap-[4px] text-center font-semibold">
                                        <div className="col">
                                             <p className='p-2 bg-slate-200 rounded-lg text-xs'>Branding </p>
                                        </div>
                                        <div className="col">
                                            <p className='p-2 bg-slate-200 rounded-lg text-xs'>UI/UX</p>
                                        </div>
                                        <div className="col">
                                            <p className='p-2 bg-slate-200 rounded-lg text-xs'>Web-Design</p>
                                        </div>
                                        <div className="col">
                                            <p className='p-2 bg-slate-200 rounded-lg text-xs'>App-Design</p>
                                        </div>
                                        <div className="col">
                                            <p className='p-2 bg-slate-200 rounded-lg text-xs'>JAVA</p>
                                        </div>
                                        <div className="col">
                                            <p className='p-2 bg-slate-200 rounded-lg text-xs'>SQL</p>
                                        </div>

                                     </div>

                                  </div>
                                </div>
                                
                                </div>
                        </div>
                    </div>

                   </div>
           </div>
        </div>
      
    </div>
  )
}

export default Profile
