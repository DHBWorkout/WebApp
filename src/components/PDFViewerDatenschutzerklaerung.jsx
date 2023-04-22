import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '../ressource/assets/pdfviewer.css'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import pdfFile from '../ressource/pdf/Datenschutzerklärung_de.pdf'

const PDFViewer = () => {

  const [defaultPdfFile] = useState(pdfFile)

  const defaultLayoutPluginInstance = defaultLayoutPlugin();


  return (
    <div className='pdfviewer'>
      {defaultPdfFile && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
        <Viewer fileUrl={defaultPdfFile}
          plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
    </div>
  );
};

export default PDFViewer;

//"C:\\Users\\marcg\\Desktop\\TINF21B5\\Semester 4\\DHBWorkout\\frontend\\src\\ressource\\pdf\\AGBs_de.pdf"