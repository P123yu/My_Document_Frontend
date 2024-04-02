// // import React, { useState } from 'react';
// // import { useLocation } from 'react-router-dom';

// // import Box from '@mui/material/Box';
// // import Tab from '@mui/material/Tab';
// // import Tabs from '@mui/material/Tabs';

// // import { BsFillFilePdfFill } from "react-icons/bs";
// // import { FiDownload } from 'react-icons/fi';

// // function PdfAll() {
// //   const location = useLocation();
// //   const info = location.state.data;
// //   console.log(info);

// //   const info1 = info[0];
// //   const info2 = info[1];

// //   const [value, setValue] = useState(0);

// //   const handleOpen = (pdf) => {
// //     // Open a new window or tab with the PDF content
// //     const newWindow = window.open();
// //     newWindow.document.write(`
// //       <html>
// //         <body style="margin: 0; overflow: hidden;">
// //           <embed width="100%" height="100%" src="data:application/pdf;base64,${pdf.pdfByte || pdf.myDocpdfData}" type="application/pdf">
// //         </body>
// //       </html>
// //     `);
// //   };

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

// //   console.log(info1, info2);

// //   return (
// //     <div className='bg-blue-200 w-1/2'>
// //       <div className='flex justify-between mx-2'>
// //         <h1 className='font-semibold text-xl'>My Document</h1>
// //       </div>

// //       <Box sx={{ width: '100%' }}>
// //         <Tabs onChange={handleChange} value={value} selectionFollowsFocus>
// //           <Tab label="Company" />
// //           <Tab label="My Documents" />
// //         </Tabs>
// //       </Box>

// //       {value === 0 ? (
// //         info1.map((data) => (
// //           <div key={data.empId} className="my-4 flex space-x-6">
// //             <div>
// //               <h3 className='text-blue-900 font-semibold' onClick={() => handleOpen(data)}>
// //                 <div className='flex items-center'>
// //                   <BsFillFilePdfFill className='text-red-700 text-xl cursor-pointer' />
// //                   <h3 className='ml-3 cursor-pointer'>{data.pdfName} </h3>
// //                 </div>
// //               </h3>
// //             </div>
// //             <a href={`data:application/pdf;base64,${data.pdfByte}`} download={data.pdfName}>
// //               <FiDownload className='text-xl font-bolder cursor-pointer' />
// //             </a>
// //           </div>
// //         ))
// //       ) : (
// //         info2.map((data) => (
// //           <div key={data.empId} className="my-4 flex space-x-6">
// //             <div className='flex space-x-4 items-center'>
// //               <div>
// //                 <h3 className='text-blue-900 font-semibold' onClick={() => handleOpen(data)}>
// //                   <div className='flex items-center'>
// //                     <BsFillFilePdfFill className='text-red-700 text-xl cursor-pointer' />
// //                     <h3 className='ml-3 cursor-pointer'>{data.myDocpdfName} </h3>
// //                   </div>
// //                 </h3>
// //               </div>
// //             </div>
// //             <a href={`data:application/pdf;base64,${data.myDocpdfData}`} download={data.myDocpdfName}>
// //               <FiDownload className='text-xl font-bolder cursor-pointer' />
// //             </a>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // export default PdfAll;


// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import axios from 'axios';
// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import DataTable from 'react-data-table-component';


// export default function App() {
//   const [value, setValue] = useState(0);
//   const [info1, setInfo1] = useState([]); // Renamed pdfData to info1
//   const [info2, setInfo2] = useState([]); // Renamed myDocData to info2
//   const [selectedPdf, setSelectedPdf] = useState(null);
 
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   useEffect(() => {
//     if (value === 0) {
//       getPdfData();
//     } else {
//       getMyDocData();
//     }
//   }, [value]);


//   const info=[
//     {
//     name:"Document Name",
//     }
    
//   ]


//   const columns=[

//   ]
//   const getPdfData = () => {
//     axios
//       .get('http://localhost:8080/pdf/getAll')
//       .then((response) => setInfo1(response.data)) // Updated setPdfData to setInfo1
//       .catch((error) => console.log(error));
//   };

//   const getMyDocData = () => {
//     axios
//       .get('http://localhost:8080/myDoc/getAll')
//       .then((response) => setInfo2(response.data)) // Updated setMyDocData to setInfo2
//       .catch((error) => console.log(error));
//   };

//   console.log(info1,info2);
//   const handleOpen = (pdf) => {
//     // Open a new window or tab with the PDF content
//     const newWindow = window.open();
//     newWindow.document.write(`
//       <html>
//         <body style="margin: 0; overflow: hidden;">
//           <embed width="100%" height="100%" src="data:application/pdf;base64,${pdf.pdfByte || pdf.myDocpdfData}" type="application/pdf">
//         </body>
//       </html>
//     `);
//   };

//   return (
//     <div className='bg-blue-200 w-1/2'>
//       <div className='flex justify-between mx-2'>
//         <h1 className='font-semibold text-xl'>My Document</h1>
     
//       </div>

//       <Box sx={{ width: '100%' }}>
//         <Tabs onChange={handleChange} value={value} selectionFollowsFocus>
//           <Tab label="Company" />
//           <Tab label="My Documents" />
//         </Tabs>
//       </Box>

//       <DataTable columns={columns} data={info1} />

      

// {/* 
//       {value === 0 ? (
//         info1.map((data) => (
//           <div key={data.empId} className="my-4 flex space-x-6 ">
//             <div>
//               <h3 className='text-blue-900 font-semibold' onClick={() => handleOpen(data)}>
//                 <div className='flex items-center'>
//                   <BsFillFilePdfFill className='text-red-700 text-xl cursor-pointer' />
//                   <h3 className='ml-3 cursor-pointer'>{data.pdfName} </h3>
//                 </div>
//               </h3>
//             </div>
//             <a href={`data:application/pdf;base64,${data.pdfByte}`} download={data.pdfName}>
//               <FiDownload className='text-xl font-bolder cursor-pointer' />
//             </a>
//           </div>
//         ))
//       ) : (
//         info2.map((data) => (
//           <div key={data.empId} className="my-4 flex space-x-6">
//             <div className='flex space-x-4 items-center' >
//               <div>
//                 <h3 className='text-blue-900 font-semibold' onClick={() => handleOpen(data)}>
//                   <div className='flex items-center'>
//                     <BsFillFilePdfFill className='text-red-700 text-xl cursor-pointer' />
//                     <h3 className='ml-3 cursor-pointer'>{data.myDocpdfName} </h3>
//                   </div>
//                 </h3>
//               </div>
//             </div>
//             <a href={`data:application/pdf;base64,${data.myDocpdfData}`} download={data.myDocpdfName}>
//               <FiDownload className='text-xl font-bolder cursor-pointer' />
//             </a>
//           </div>
//         ))
//       )} */}
//     </div>
//   );
// }












import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { CiUser } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa";
import { HiBuildingOffice } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';



function App() {
  const [value, setValue] = useState(0);
  const [info1, setInfo1] = useState([]);
  const [info2, setInfo2] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [option,setOption]=useState();
  
  const navigate=useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const options1 = ['All', 'Folder'];
    const defaultOption1 = options1[0];

    const handleSelect = (selectedOption) => {
        setOption(`${selectedOption.value}`);
    };


if(option=="Folder"){
    navigate("/folder",{state:{data:{option}}})
}

  useEffect(() => {
    if (value === 0) {
      getPdfData();
    } else {
      getMyDocData();
    }
  }, [value]);


  const getPdfData = () => {
    axios
      .get('http://localhost:8080/pdf/getAll')
      .then((response) => setInfo1(response.data))
      .catch((error) => console.log(error));
  };

  const getMyDocData = () => {
    axios
      .get('http://localhost:8080/myDoc/getAll')
      .then((response) => setInfo2(response.data))
      .catch((error) => console.log(error));
  };

  const handleOpen = (row) => {
    let fileName="";
    for(let i of row.pdfName){
      if(i!=" "){
        fileName+=i;
      }
    }

   // console.log(fileName);

    axios.get(`http://localhost:8080/pdf/download?folder=${row.folder}&fileName=${fileName}`, {
      responseType: 'arraybuffer',
  })
  .then(response => {
      // Convert ArrayBuffer to Blob
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      // Create an object URL for the Blob
      const pdfUrl = URL.createObjectURL(pdfBlob);
      // Open a new window and display the PDF using an iframe
      const newWindow = window.open();
      newWindow.document.write(`
          <html>
              <head>
                  <title>PDF Viewer</title>
              </head>
              <body style="margin: 0; overflow: hidden;">
                  <iframe width="100%" height="100%" src="${pdfUrl}" type="application/pdf"></iframe>
              </body>
          </html>
      `);
      // Release the object URL when no longer needed
      URL.revokeObjectURL(pdfUrl);
  })
  .catch(error => {
      console.error('Failed to fetch or download PDF:', error);
  });
  

    // axios.get(`http://localhost:8080/pdf/download?folder=${row.folder}&fileName=${h}`)

    // .then(response => {
    //   console.warn(response.data);
    //   // Convert ArrayBuffer to Blob
    //   const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
  
    //   // // Save the Blob as a file
    //   // saveAs(pdfBlob);
  
    //   // // Additional code after the PDF is fetched and saved (if needed)
    //   // console.log('PDF fetch and save completed.');
    // })
    
    // const newWindow = window.open();
    // newWindow.document.write(`
    //   <html>
    //     <body style="margin: 0; overflow: hidden;">
    //       <embed width="100%" height="100%" src="data:application/pdf;base64,${pdf.pdfByte || pdf.myDocpdfData}" type="application/pdf">
    //     </body>
    //   </html>
    // `);
  };


  const monthMapping = {
    1: 'January',2: 'February',3: 'March',4: 'April',5: 'May',6: 'June',7: 'July',8: 'August',
    9: 'September',10: 'October',11: 'November',12: 'December',
  };


  let columns = [
    {
      name: 'Shared To',
      selector: row => row.sharedTo,
    },
    {
      name: 'Folder',
      selector: row => row.folder,
    },
    {
      name: 'Modified On',
      selector: row => row.modifiedOn.split('-')[2]+"-"+monthMapping[Number(row.modifiedOn.split('-')[1])]+"-"+row.modifiedOn.split('-')[0]
    },
  ];
  
const documentNameCell = (row, documentName) => (
    <div className='flex gap-5 font-semibold items-center cursor-pointer' onClick={() => handleOpen(row)}>
      <FaRegFilePdf className='text-xl' />
      {documentName}
    </div>
  );

 

const documentName = value === 0 ? 'pdfName' : 'pdfName';

columns.unshift({
  name: 'Document Name',
  cell: row => documentNameCell(row, row[documentName]),
});



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
              <Dropdown options={options1} onChange={handleSelect} value={defaultOption1} placeholder="Select an option"/>
            </div>
      </div>

      <h1 className='border-b-[1px] border-blue-900 w-96'></h1>
     <DataTable
        columns={columns}
        data={value === 0 ? info1 : info2}
      />
     
    </div>
  );
}
export default App;


