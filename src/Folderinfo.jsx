import axios from 'axios';
import React from 'react';
import DataTable from 'react-data-table-component';
import { FaRegFilePdf } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

function Folderinfo() {

    const location=useLocation();
    const locationData=location.state.data;

    //console.log(locationData,"locationData");

    const monthMapping = {
        1: 'January',2: 'February',3: 'March',4: 'April',5: 'May',6: 'June',7: 'July',8: 'August',
        9: 'September',10: 'October',11: 'November',12: 'December',
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
  
  }

    
    const columns=[
        {
            name: 'Document Name',
            cell: row => (
              <div className='flex gap-5 font-semibold items-center cursor-pointer' onClick={() => handleOpen(row)}>
                <FaRegFilePdf className='text-xl' />
                {row.pdfName}
              </div>
            ),
          },
        {
            name:"Shared To",
            selector:row=>row.sharedTo
        },
        {
            name:"Shared To",
            selector:row=>row.sharedTo
        },
        {
            name: 'Modified On',
            selector: row => row.modifiedOn.split('-')[2]+"-"+monthMapping[Number(row.modifiedOn.split('-')[1])]+"-"+row.modifiedOn.split('-')[0]
        },
    ]

   
    
    
  return (
    <div>
        <div className='font-bold text-xl ml-5 mt-10'>
            <h1>{folderName}</h1>
        </div>
       <DataTable data={locationData}  columns={columns} />
    </div>
  )
}

export default Folderinfo
