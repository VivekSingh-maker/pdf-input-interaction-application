import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import samplePDF from './sample.pdf'; // Example PDF


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;



// async function init() {          
//   const pdfjs = await import('pdfjs-dist/build/pdf');          
//   const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.min');           
//   pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker; 
// } window.onload = () => {init()}

const PdfViewer = () => {
  return (
    <div className="pdf-container w-full h-full border">
      <Document file={samplePDF}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};



export default PdfViewer;