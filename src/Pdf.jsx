// // // // App.jsx
// // // import Box from '@mui/material/Box';
// // // import Tab from '@mui/material/Tab';
// // // import Tabs from '@mui/material/Tabs';
// // // import axios from 'axios';
// // // import * as React from 'react';
// // // import { useEffect, useState } from 'react';
// // // import { FaRegFilePdf } from 'react-icons/fa';
// // // import { FiDownload } from 'react-icons/fi';

// // // export default function App() {
// // //   const [value, setValue] = useState(0);
// // //   const [pdfData, setPdfData] = useState([]);
// // //   const [myDocData, setMyDocData] = useState([]);
// // //   const [selectedPdf, setSelectedPdf] = useState(null);

// // //   const handleChange = (event, newValue) => {
// // //     setValue(newValue);
// // //   };

// // //   useEffect(() => {
// // //     if (value === 0) {
// // //       getPdfData();
// // //     } else {
// // //       getMyDocData();
// // //     }
// // //   }, [value]);

// // //   const getPdfData = () => {
// // //     axios
// // //       .get('http://localhost:8080/pdf/getAll')
// // //       .then((response) => setPdfData(response.data))
// // //       .catch((error) => console.log(error));
// // //   };

// // //   const getMyDocData = () => {
// // //     axios
// // //       .get('http://localhost:8080/myDoc/getAll')
// // //       .then((response) => setMyDocData(response.data))
// // //       .catch((error) => console.log(error));
// // //   };
// // //   const handleOpen = (pdf) => {
// // //     setSelectedPdf(pdf);
// // //     // Open a new window or tab with PdfViewerPage
// // //     const newWindow = window.open('/pdf-viewer', '_blank');
// // //     if (newWindow) {
// // //       // Pass the selected PDF data to the new window using newWindow.pdfData
// // //       newWindow.pdfData = pdf;
// // //     }
// // //   };
  
// // //   return (
// // //     <>
// // //       <Box sx={{ width: '100%' }}>
// // //         <Tabs onChange={handleChange} value={value} aria-label="Tabs where selection follows focus" selectionFollowsFocus>
// // //           <Tab label="Item One" />
// // //           <Tab label="Item Two" />
// // //         </Tabs>
// // //       </Box>

// // //       {value === 0 ? (
// // //         pdfData.map((employee) => (
// // //           <div key={employee.empId} className="my-4 flex space-x-6">
// // //             <div className='flex space-x-4 items-center'>
// // //               <FaRegFilePdf className='text-red-700 text-xl' />
// // //               <h3 className='text-blue-900 font-semibold' onClick={() => handleOpen(employee)}>
// // //                 {employee.pdfName}
// // //               </h3>
// // //             </div>
// // //             <a href={`data:application/pdf;base64,${employee.pdfByte}`} download={employee.pdfName}>
// // //               <FiDownload className='text-xl font-bolder' />
// // //             </a>
// // //           </div>
// // //         ))
// // //       ) : (
// // //         myDocData.map((employee) => (
// // //           <div key={employee.empId} className="my-4 flex space-x-6">
// // //             <div className='flex space-x-4 items-center' onClick={() => handleOpen(employee)}>
// // //               <FaRegFilePdf className='text-red-700 text-xl' />
// // //               <h3 className='text-blue-900 font-semibold'>{employee.myDocpdfName}</h3>
// // //             </div>
// // //             <a href={`data:application/pdf;base64,${employee.myDocpdfData}`} download={employee.myDocpdfName}>
// // //               <FiDownload className='text-xl font-bolder' />
// // //             </a>
// // //           </div>
// // //         ))
// // //       )}
// // //     </>
// // //   );
// // // }




// // // Importing necessary components and libraries
// // import Box from '@mui/material/Box';
// // import Tab from '@mui/material/Tab';
// // import Tabs from '@mui/material/Tabs';
// // import axios from 'axios';
// // import * as React from 'react';
// // import { useEffect, useState } from 'react';
// // import { FaRegFilePdf } from 'react-icons/fa';
// // import { FiDownload } from 'react-icons/fi';


// // export default function App() {
// //   const [value, setValue] = useState(0);
// //   const [pdfData, setPdfData] = useState([]);
// //   const [myDocData, setMyDocData] = useState([]);
// //   const [selectedPdf, setSelectedPdf] = useState(null);

// //   // Handling tab change
// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

  
// //   useEffect(() => {
// //     if (value === 0) {
// //       getPdfData();
// //     } else {
// //       getMyDocData();
// //     }
// //   }, [value]);

  
// //   const getPdfData = () => {
// //     axios
// //       .get('http://localhost:8080/pdf/getAll')
// //       .then((response) => setPdfData(response.data))
// //       .catch((error) => console.log(error));
// //   };

  
// //   const getMyDocData = () => {
// //     axios
// //       .get('http://localhost:8080/myDoc/getAll')
// //       .then((response) => setMyDocData(response.data))
// //       .catch((error) => console.log(error));
// //   };

// //   // Handling PDF opening and download
// //   const handleDownload = (pdf) => {
// //     const link = document.createElement('a');
// //     link.href = `data:application/pdf;base64,${pdf.pdfByte || pdf.myDocpdfData}`;
// //     link.download = pdf.pdfName || pdf.myDocpdfName;
// //     link.click();
// //     window.open("https://example.com");
// //   };

 
// //   return (
// //     <>
      
// //       <Box sx={{ width: '100%' }}>
// //         <Tabs onChange={handleChange} value={value}  selectionFollowsFocus>
// //           <Tab label="Item One" />
// //           <Tab label="Item Two" />
// //         </Tabs>
// //       </Box>

    
// //       {value === 0 ? (

// //         // Mapping over PDF data and rendering each item
// //         pdfData.map((employee) => (
// //           <div key={employee.empId} className="my-4 flex space-x-6">

// //             {/* Displaying PDF icon and name */}
// //             <div className='flex space-x-4 items-center'>
// //               <FaRegFilePdf className='text-red-700 text-xl' />
// //               <h3 className='text-blue-900 font-semibold'>
// //                 {employee.pdfName}
// //               </h3>
// //             </div>

// //             {/* Button for downloading the PDF */}
// //             <button onClick={() => handleDownload(employee)}>
// //               <FiDownload className='text-xl font-bolder' />
// //             </button>
// //           </div>
// //         ))
// //       ) : (
// //         // Mapping over MyDoc data and rendering each item
// //         myDocData.map((employee) => (
// //           <div key={employee.empId} className="my-4 flex space-x-6">

           
// //             <div className='flex space-x-4 items-center'>
// //               <FaRegFilePdf className='text-red-700 text-xl' />
// //               <h3 className='text-blue-900 font-semibold'>
// //                 {employee.myDocpdfName}
// //               </h3>
// //             </div>

           
// //             <button onClick={() => handleDownload(employee)}>
// //               <FiDownload className='text-xl font-bolder' />
// //             </button>
// //           </div>
// //         ))
// //       )}
// //     </>
// //   );
// // }




// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import axios from 'axios';
// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { BsFillFilePdfFill } from "react-icons/bs";
// import { FiDownload } from 'react-icons/fi';

// export default function App() {
//   const [value, setValue] = useState(0);
//   const [pdfData, setPdfData] = useState([]);
//   const [myDocData, setMyDocData] = useState([]);
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



//   const getPdfData = () => {
//     axios
//       .get('http://localhost:8080/pdf/getAll')
//       .then((response) => setPdfData(response.data))
//       .catch((error) => console.log(error));
//   };

//   const getMyDocData = () => {
//     axios
//       .get('http://localhost:8080/myDoc/getAll')
//       .then((response) => setMyDocData(response.data))
//       .catch((error) => console.log(error));
//   };



//   console.log(pdfData);
//   const handleOpen = (pdf) => {
//     // Open a new window or tab with the PDF content
//     const newWindow = window.open();
//       newWindow.document.write(`
//         <html>
//           <body style="margin: 0; overflow: hidden;">
//             <embed width="50%" height="100%" src="data:application/pdf;base64,${pdf.pdfByte || pdf.myDocpdfData}" type="application/pdf">
//           </body>
//         </html>
        
//       `);
//   };

//   return (
//     <>
//       <Box sx={{ width: '100%' }}>
//         <Tabs onChange={handleChange} value={value} selectionFollowsFocus>
//           <Tab label="Company"/>
//           <Tab label="My Documents" />
//         </Tabs>
//       </Box>

//       {value === 0 ? (
//         pdfData.map((data) => (
//           <div key={data.empId} className="my-4 flex space-x-6 ">
//             <div >
//               <h3 className='text-blue-900 font-semibold' onClick={() => handleOpen(data)}>
//                 <div className='flex items-center'>
//               <BsFillFilePdfFill className='text-red-700 text-xl cursor-pointer' />
//               <h3 className='ml-3 cursor-pointer'>{data.pdfName} </h3>  
//               </div>
//               </h3>
//             </div>

//          <a href={`data:application/pdf;base64,${data.pdfByte}`} download={data.pdfName}>
//               <FiDownload className='text-xl font-bolder cursor-pointer' />
//             </a>
//           </div>
//         ))
//       ) : (
//         myDocData.map((data) => (
//           <div key={data.empId} className="my-4 flex space-x-6">
//             <div className='flex space-x-4 items-center' >

//             <div >
//               <h3 className='text-blue-900 font-semibold' onClick={() => handleOpen(data)}>
//                 <div className='flex items-center'>
//               <BsFillFilePdfFill className='text-red-700 text-xl cursor-pointer' />
//               <h3 className='ml-3 cursor-pointer'>{data.myDocpdfName} </h3>
//               </div>
//               </h3>
//             </div>
              
//             </div>
//             <a href={`data:application/pdf;base64,${data.myDocpdfData}`} download={data.myDocpdfName} >
//                <FiDownload className='text-xl font-bolder cursor-pointer' />
//              </a>
//           </div>
//         ))
//       )}
//     </>
//   );
// }






// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import axios from 'axios';
// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { BsFillFilePdfFill } from "react-icons/bs";
// import { FiDownload } from 'react-icons/fi';

// export default function App() {
//   const [value, setValue] = useState(0);
//   const [pdfData, setPdfData] = useState([]);
//   const [myDocData, setMyDocData] = useState([]);

//   console.log(pdfData)

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

//   const getPdfData = () => {
//     axios
//       .get('http://localhost:8080/pdf/getAll')
//       .then((response) => setPdfData(response.data))
//       .catch((error) => console.log(error));
//   };

//   const getMyDocData = () => {
//     axios
//       .get('http://localhost:8080/myDoc/getAll')
//       .then((response) => setMyDocData(response.data))
//       .catch((error) => console.log(error));
//   };

// // const handleOpen = (pdf) => {
// //   // Open a new window or tab with the PDF content
// //   const newWindow = window.open();

// //   // const pdfProperties = pdfData.map(i=>i.pdfName);
// //   // console.log(pdfProperties,"pdfProperties")

// //   newWindow.document.write(`
// //     <html>
// //       <head>
// //         <style>
// //           body {
// //             margin: 0;
// //             overflow: hidden;
// //             display: flex;
// //             justify-content: space-between;
// //           }
// //           .pdf-container {
// //             width: 50%;
// //             height: 100vh; /* Use viewport height for full height */
// //           }
// //           .text-container {
// //             width: 50%;
// //             height: 100vh; /* Use viewport height for full height */
// //             padding: 20px; /* Adjust the padding as needed */
// //           }
// //         </style>
// //       </head>
// //       <body>
// //         <div class="pdf-container">
// //           <embed width="100%" height="100%" src="data:application/pdf;base64,${pdf.pdfByte || pdf.myDocpdfData}" type="application/pdf">
// //         </div>
// //         <div class="text-container">
// //           <ul>
// //             ${pdfData.map((i) => `<li>${i.pdfName} </li>`).join('')}
// //           </ul>
          
// //         </div>
// //       </body>
// //     </html>
// //   `);
// // };


// //--------------------------------------------------------------------------------------------------------------------------
// // const handleOpen = (data) => {
// //   // Open a new window or tab with the PDF content
// //   const newWindow = window.open();

// //   newWindow.document.write(`
// //     <html>
// //       <head>
// //         <style>
// //           body {
// //             margin: 0;
// //             overflow: hidden;
// //             display: flex;
// //             justify-content: space-between;
// //           }
// //           .pdf-container {
// //             width: 50%;
// //             height: 100vh; /* Use viewport height for full height */
// //           }
// //           .text-container {
// //             width: 50%;
// //             height: 100vh; /* Use viewport height for full height */
// //             padding: 20px; /* Adjust the padding as needed */
// //           }
// //         </style>
// //       </head>
// //       <body>
// //         <div class="pdf-container">
// //           <embed width="100%" height="100%" src="data:application/pdf;base64,${data.pdfByte || data.myDocpdfData}" type="application/pdf">
// //         </div>
// //         <div class="text-container">
// //           <ul>
// //             <li>${data.pdfName || data.myDocpdfName}</li>
// //           </ul>
// //           <a href="data:application/pdf;base64,${data.pdfByte || data.myDocpdfData}" download="${data.pdfName || data.myDocpdfName}">
// //             <button class="text-xl font-bold cursor-pointer">Download</button>
// //           </a>
// //         </div>
// //       </body>
// //     </html>
// //   `);
// // };


// // const handleOpen = (pdfData) => {
// //   // Open a new window or tab with the PDF content
// //   const newWindow = window.open();

// //   newWindow.document.write(`
// //     <html>
// //       <head>
// //         <style>
// //           body {
// //             margin: 0;
// //             overflow: hidden;
// //             display: flex;
// //             justify-content: space-between;
// //           }
// //           .pdf-container {
// //             width: 50%;
// //             height: 100vh; /* Use viewport height for full height */
// //           }
// //           .text-container {
// //             width: 50%;
// //             height: 100vh; /* Use viewport height for full height */
// //             padding: 20px; /* Adjust the padding as needed */
// //           }
// //         </style>
// //       </head>
// //       <body>
// //         <div class="pdf-container">
// //           <embed width="100%" height="100%" src="data:application/pdf;base64,${pdfData[0].pdfByte || pdfData[0].myDocpdfData}" type="application/pdf">
// //         </div>
// //         <div class="text-container">
// //           <ul>
// //             ${pdfData.map((data) => `
// //               <li>${data.pdfName || data.myDocpdfName} 
// //                 <a href="data:application/pdf;base64,${data.pdfByte || data.myDocpdfData}" download="${data.pdfName || data.myDocpdfName}">
// //                   <button class="text-xl font-bold cursor-pointer">Download</button>
// //                 </a>
// //               </li>
// //             `).join('')}
// //           </ul>
// //         </div>
// //       </body>
// //     </html>
// //   `);
// // };


// // const handleOpen = (pdfData) => {
// //   // Open a new window or tab with the PDF content
// //   const newWindow = window.open();

// //   newWindow.document.write(`
// //     <html>
// //       <head>
// //         <style>
// //           body {
// //             margin: 0;
// //             overflow: hidden;
// //             display: flex;
// //             justify-content: space-between;
// //           }
// //           .pdf-container {
// //             width: 50%;
// //             height: 100vh; /* Use viewport height for full height */
// //           }
// //           .text-container {
// //             width: 50%;
// //             height: 100vh; /* Use viewport height for full height */
// //             padding: 20px; /* Adjust the padding as needed */
// //           }
// //         </style>
// //       </head>
// //       <body>
// //         <div class="pdf-container">
// //           <embed width="100%" height="100%" src="data:application/pdf;base64,${pdfData[0].pdfByte || pdfData[0].myDocpdfData}" type="application/pdf">
// //         </div>
// //         <div class="text-container">
// //           <ul>
// //             ${pdfData.map((data) => `
// //               <li>${data.pdfName || data.myDocpdfName} 
// //                 <a href="data:application/pdf;base64,${data.pdfByte || data.myDocpdfData}" download="${data.pdfName || data.myDocpdfName}">
// //                   <button class="text-xl font-bold cursor-pointer">Download</button>
// //                 </a>
// //               </li>
// //             `).join('')}
// //           </ul>
// //         </div>
// //       </body>
// //     </html>
// //   `);
// // };


// // const handleOpen = (pdfData) => {

// // console.log(pdfData,"pdfData")
// //   // Open a new window or tab with the PDF content
// //   const newWindow = window.open();

// //   // Get the base64 data for the first item in the array
// //   const base64Data = pdfData.length > 0 ? pdfData[0].pdfByte || pdfData[0].myDocpdfData : '';

// //   newWindow.document.write(`
// //     <html>
// //       <head>
// //         <style>
// //           body {
// //             margin: 0;
// //             overflow: hidden;
// //             display: flex;
// //             justify-content: space-between;
// //           }
// //           .pdf-container {
// //             width: 50%;
// //             height: 100vh; /* Use viewport height for full height */
// //           }
// //           .text-container {
// //             width: 50%;
// //             height: 100vh; /* Use viewport height for full height */
// //             padding: 20px; /* Adjust the padding as needed */
// //           }
// //         </style>
// //       </head>
// //       <body>
// //         <div class="pdf-container">
// //           <embed width="100%" height="100%" src="data:application/pdf;base64,${base64Data}" type="application/pdf">
// //         </div>
// //         <div class="text-container">
// //           <ul>
// //             ${pdfData.map((data) => `
// //               <li>${data.pdfName || data.myDocpdfName} 
// //                 <a href="data:application/pdf;base64,${data.pdfByte || data.myDocpdfData}" download="${data.pdfName || data.myDocpdfName}">
// //                   <button class="text-xl font-bold cursor-pointer">Download</button>
// //                 </a>
// //               </li>
// //             `).join('')}
// //           </ul>
// //         </div>
// //       </body>
// //     </html>
// //   `);
// // };

  


// const handleOpen = (pdfData) => {

//   console.log(pdfData,"pdfData")
//     // Open a new window or tab with the PDF content
//     const newWindow = window.open();
  
//     // Get the base64 data for the first item in the array
//     const base64Data = pdfData.length > 0 ? pdfData[0].pdfByte || pdfData[0].myDocpdfData : '';
  
//     newWindow.document.write(`
//       <html>
//         <head>
//           <style>
//             body {
//               margin: 0;
//               overflow: hidden;
//               display: flex;
//               justify-content: space-between;
//             }
//             .pdf-container {
//               width: 50%;
//               height: 100vh; /* Use viewport height for full height */
//             }
//             .text-container {
//               width: 50%;
//               height: 100vh; /* Use viewport height for full height */
//               padding: 20px; /* Adjust the padding as needed */
//             }
//           </style>
//         </head>
//         <body>
//           <div class="pdf-container">
//             <embed width="100%" height="100%" src="data:application/pdf;base64,${base64Data}" type="application/pdf">
//           </div>
//           <div class="text-container">
//             <ul>
//               ${pdfData.map((data) => `
//                 <li>${data.pdfName || data.myDocpdfName} 
//                   <a href="data:application/pdf;base64,${data.pdfByte || data.myDocpdfData}" download="${data.pdfName || data.myDocpdfName}">
//                     <button class="text-xl font-bold cursor-pointer">Download</button>
//                   </a>
//                 </li>
//               `).join('')}
//             </ul>
//           </div>
//         </body>
//       </html>
//     `);
//   };
  
    
  

//   return (
//     <>
//       <Box sx={{ width: '100%' }}>
//         <Tabs onChange={handleChange} value={value} selectionFollowsFocus>
//           <Tab label="Company"/>
//           <Tab label="My Documents" />
//         </Tabs>
//       </Box>

//       {/* {value === 0 ? (
//         pdfData.map((data) => (
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
//         myDocData.map((data) => (
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
//             <a href={`data:application/pdf;base64,${data.myDocpdfData}`} download={data.myDocpdfName} >
//               <FiDownload className='text-xl font-bolder cursor-pointer' />
//             </a>
//           </div>
//         ))
//       )} */}

// {value === 0 ? (
//   pdfData.map((data) => (
//     <div key={data.empId} className="my-4 flex space-x-6 ">
//       <div>
//         <h3 className='text-blue-900 font-semibold' onClick={() => handleOpen([data])}>
//           <div className='flex items-center'>
//             <BsFillFilePdfFill className='text-red-700 text-xl cursor-pointer' />
//             <h3 className='ml-3 cursor-pointer'>{data.pdfName} </h3>  
//           </div>
//         </h3>
//       </div>
//       <a href={`data:application/pdf;base64,${data.pdfByte}`} download={data.pdfName}>
//         <FiDownload className='text-xl font-bolder cursor-pointer' />
//       </a>
//     </div>
//   ))
// ) : (
//   myDocData.map((data) => (
//     <div key={data.empId} className="my-4 flex space-x-6">
//       <div className='flex space-x-4 items-center' >
//         <div>
//           <h3 className='text-blue-900 font-semibold' onClick={() => handleOpen([data])}>
//             <div className='flex items-center'>
//               <BsFillFilePdfFill className='text-red-700 text-xl cursor-pointer' />
//               <h3 className='ml-3 cursor-pointer'>{data.myDocpdfName} </h3>
//             </div>
//           </h3>
//         </div>
//       </div>
//       <a href={`data:application/pdf;base64,${data.myDocpdfData}`} download={data.myDocpdfName} >
//         <FiDownload className='text-xl font-bolder cursor-pointer' />
//       </a>
//     </div>
//   ))
// )}
//     </>
//   );
// }




// // import axios from 'axios';
// // import * as React from 'react';
// // import { useEffect, useState } from 'react';
// // import { FaRegFilePdf } from 'react-icons/fa';

// // export default function App() {
// //   const [value, setValue] = useState(0);
// //   const [pdfData, setPdfData] = useState([]);

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

// //   useEffect(() => {
// //     if (value === 0) {
// //       getPdfData();
// //     }
// //   }, [value]);

// //   const getPdfData = () => {
// //     axios
// //       .get('http://localhost:8080/pdf/getAll')
// //       .then((response) => setPdfData(response.data))
// //       .catch((error) => console.log(error));
// //   };


  
// // const handleOpen = (pdf) => {
  
// // console.log(pdf);

// //   const newWindow = window.open();
// //     newWindow.document.write(`
// //       <html>
// //         <body style="margin: 0; overflow: hidden;">
// //           <embed width="50%" height="100%" src="data:application/pdf;base64,${pdf.pdfByte}" type="application/pdf">
// //         </body>
// //       </html>
// //     `);
// // };





// //   // const handleOpen = (pdf) => {
// //   //   // Open a new window or tab with the PDF content
// //   //   const newWindow = window.open();
// //   //   // if (newWindow) {
// //   //   //   // Set the HTML content of the new window to display the PDF
// //   //     newWindow.document.write(`
// //   //       <html>
// //   //         <body style="margin: 0; overflow: hidden;">
// //   //           <embed width="100%" height="100%" src="data:application/pdf;base64,${pdf.pdfByte}" type="application/pdf">
// //   //         </body>
// //   //       </html>
// //   //     `);

// //   //     // // Add a close button to the new window
// //   //     // newWindow.document.write(`
// //   //     //   <button style="position: fixed; top: 10px; right: 10px; padding: 10px; cursor: pointer;" onclick="window.close()">Close</button>
// //   //     // `);
// //   //   // } else {
// //   //   //   // Fallback for browsers that block opening new windows
// //   //   //   window.location.href = `data:application/pdf;base64,${pdf.pdfByte}`;
// //   //   // }
// //   // };

// //   return (
// //     <>
// //       {/* <Box sx={{ width: '100%' }}>
// //         <Tabs onChange={handleChange} value={value} selectionFollowsFocus>
// //           <Tab label="Item One" />
// //         </Tabs>
// //       </Box> */}

// //       {pdfData.map((employee) => (
// //         <div key={employee.empId} className="my-4 flex space-x-6">
// //           <div className='flex space-x-4 items-center' onClick={() => handleOpen(employee)}>
// //             <FaRegFilePdf className='text-red-700 text-xl' />
// //           </div>
// //         </div>
// //       ))}
// //     </>
// //   );
// // }






// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import axios from 'axios';
// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { BsFillFilePdfFill } from "react-icons/bs";
// import { FiDownload } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';

// export default function App() {
//   const [value, setValue] = useState(0);
//   const [pdfData, setPdfData] = useState([]);
//   const [myDocData, setMyDocData] = useState([]);
//   const [selectedPdf, setSelectedPdf] = useState(null);
//   const navigate=useNavigate();

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



//   const getPdfData = () => {
//     axios
//       .get('http://localhost:8080/pdf/getAll')
//       .then((response) => setPdfData(response.data))
//       .catch((error) => console.log(error));
//   };

//   const getMyDocData = () => {
//     axios
//       .get('http://localhost:8080/myDoc/getAll')
//       .then((response) => setMyDocData(response.data))
//       .catch((error) => console.log(error));
//   };


//   const handleViewAll=()=>{
//          navigate("/PdfAll");
//   }

//   console.log(pdfData);
//   const handleOpen = (pdf) => {
//     // Open a new window or tab with the PDF content
//     const newWindow = window.open();
//       newWindow.document.write(`
//         <html>
//           <body style="margin: 0; overflow: hidden;">
//             <embed width="100%" height="100%" src="data:application/pdf;base64,${pdf.pdfByte || pdf.myDocpdfData}" type="application/pdf">
//           </body>
//         </html>
        
//       `);
//   };

//   return (
//     <div className='bg-blue-200 w-1/2'>

//       <div className='flex justify-between mx-2'>
//         <h1 className='font-semibold text-xl'>My Document</h1>
//         <h1 className='font-normal text-xl' onClick={handleViewAll}>view all</h1>
//       </div>
      
//       <Box sx={{ width: '100%' }}>
        
//         <Tabs onChange={handleChange} value={value} selectionFollowsFocus>
       
            
            
//             <Tab label="Company"/>
          
          
           
//             <Tab label="My Documents" />
    
          
//         </Tabs>
//       </Box>

//       {value === 0 ? 
      
     
//       <div className='bg-blue-900 grid grid-cols-2'>
//         <div className='col-span-1 bg-yellow-400'>
//         {pdfData.map((data) => (
//           <div key={data.empId} className="my-4 flex space-x-6 ">
//             <div >
//               <h3 className='text-blue-900 font-semibold' onClick={() => handleOpen(data)}>
//                 <div className='flex items-center'>
//               <BsFillFilePdfFill className='text-red-700 text-xl cursor-pointer' />
//               <h3 className='ml-3 cursor-pointer'>{data.pdfName} </h3>  
//               </div>
//               </h3>
//             </div>
// <div className='col-span-1'>
//          <a href={`data:application/pdf;base64,${data.pdfByte}`} download={data.pdfName}>
//               <FiDownload className='text-xl font-bolder cursor-pointer' />
//             </a>
//           </div>
        
// </div>
//         ))}
//         </div>
//         </div>
//       : (
//         myDocData.map((data) => (
//           <div key={data.empId} className="my-4 flex space-x-6">
//             <div className='flex space-x-4 items-center' >

//             <div >
//               <h3 className='text-blue-900 font-semibold' onClick={() => handleOpen(data)}>
//                 <div className='flex items-center'>
//               <BsFillFilePdfFill className='text-red-700 text-xl cursor-pointer' />
//               <h3 className='ml-3 cursor-pointer'>{data.myDocpdfName} </h3>
//               </div>
//               </h3>
//             </div>
              
//             </div>
//             <a href={`data:application/pdf;base64,${data.myDocpdfData}`} download={data.myDocpdfName} >
//                <FiDownload className='text-xl font-bolder cursor-pointer' />
//              </a>
//           </div>
//         ))
//       )}
//     </div> 
//   );
// }

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import axios from 'axios';
import { saveAs } from 'file-saver';
import * as React from 'react';
import { CiUser } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa";
import { FiDownload } from 'react-icons/fi';
import { HiBuildingOffice } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [value, setValue] = React.useState(0);
  const [pdfData, setPdfData] = React.useState([]);
  const [myDocData, setMyDocData] = React.useState([]);
  const [selectedPdf, setSelectedPdf] = React.useState(null);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (value === 0) {
      getPdfData();
    } else {
      getMyDocData();
    }
  }, [value]);



  console.log(pdfData,"pdfData");

  console.warn(myDocData,"myDocData");
  const getPdfData = () => {
    axios
      .get('http://localhost:8080/pdf/getAll')
      .then((response) => setPdfData(response.data))
      .catch((error) => console.log(error));
  };

  const getMyDocData = () => {
    axios
      .get('http://localhost:8080/myDoc/getAll')
      .then((response) => setMyDocData(response.data))
      .catch((error) => console.log(error));
  };

  const handleViewAll = () => {
    navigate('/PdfAll');
  };
  
  const handleOpen = (row) => {

    let fileName="";
    for(let i of row.pdfName){
      if(i!=" "){
        fileName+=i;
      }
    }


    axios.get(`http://localhost:8080/pdf/download?folder=${row.folder}&fileName=${fileName}`, 
    {responseType: 'arraybuffer'})
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
  }


  const handleDownload=(row)=>{
    
    let fileName="";
    for(let i of row.pdfName){
      if(i!=" "){
        fileName+=i;
      }
    }

    axios.get(`http://localhost:8080/pdf/download?folder=${row.folder}&fileName=${fileName}`, 
    {responseType: 'arraybuffer'})
    .then(response => {
        // Convert ArrayBuffer to Blob
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(pdfBlob,fileName)
      })
    .catch(error => {
        console.error('Failed to fetch or download PDF:', error);
  });
  
  }



  return (
    <div className=''>
      <div className='flex justify-between mx-4'>
        <h1 className='font-semibold text-xl p-2'>Documents</h1>
        <h1 className='font-normal text-xl text-blue-900 p-2 cursor-pointer' onClick={handleViewAll}>View All</h1>
      </div>

      <Box sx={{ width: '100%' }}>
        <Tabs onChange={handleChange} value={value} selectionFollowsFocus>
        <Tab  label="Company" icon={<HiBuildingOffice className='text-xl'/>} iconPosition='start'/>
        <Tab label="My Documents" icon={<CiUser className='text-xl font-bolder'/>}  iconPosition='start'/>
        </Tabs>
      </Box>

      <h1 className='border-b-[1px] border-blue-900 '></h1>

     
  {value === 0 ? (
    pdfData.map((data) => (
      <div key={data.empId} className=' my-4 ml-6'>
         <div className='grid grid-cols-2'>
        <div className='col-span-1'>
          <h3 className='text-gray-600 ' onClick={() => handleOpen(data)}>
            <div className='flex items-center'>
              <FaRegFilePdf className='text-red-700 text-xl cursor-pointer' />
              <h3 className='ml-3 cursor-pointer'>{data.pdfName}</h3>
            </div>
          </h3>
        </div>
        <div className='col-span-1'>
         
        <FiDownload className='text-xl font-bolder cursor-pointer' onClick={()=>handleDownload(data)}/>
          
        </div>
      </div>
      </div>
    ))
  ) : (
    myDocData.map((data) => (
      <div key={data.empId} className=' my-4 ml-6'>
         <div className='grid grid-cols-2'>
        <div className='col-span-1'>
          <h3 className='text-gray-600 ' onClick={() => handleOpen(data)}>
            <div className='flex items-center'>
              <FaRegFilePdf className='text-red-700 text-xl cursor-pointer' />
              <h3 className='ml-3 cursor-pointer'>{data.pdfName}</h3>
            </div>
          </h3>
        </div>
        <div className='col-span-1'>
        <FiDownload className='text-xl font-bolder cursor-pointer' onClick={()=>handleDownload(data)}/>
        </div>
      </div>
      </div>
    ))
    
  )}
</div>
  );
}

