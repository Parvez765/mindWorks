import React, { useState } from "react";
import { Document, Page } from 'react-pdf';

const LeanTransformation = () => {
  
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
 

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
    
  }

  return (
    <div className="mt-[50px] p-10">
        <Document file="./MindworksbdLeanTransformation.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
};

export default LeanTransformation;
