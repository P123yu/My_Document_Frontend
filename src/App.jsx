import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Folder from './Folder';
import Folderinfo from './Folderinfo';
import Pdf from './Pdf';
import PdfAll from './PdfAll';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pdf></Pdf>}/>
      <Route path="/pdfAll" element={<PdfAll></PdfAll>}/>
      <Route path="/folder" element={<Folder></Folder>}/>
      <Route path="/folderInfo" element={<Folderinfo></Folderinfo>}/>
      
    </Routes>

    // <Profile></Profile>
    // <Table/>

        
       



  )
}

export default App
