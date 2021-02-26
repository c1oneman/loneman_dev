import React, { useState } from "react";

import "../App.css";
import { Document, Page, pdfjs } from "react-pdf";
import { ContentView } from "../styled-components/structure";
function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <ContentView>
      <Document
        file="/documents/Clayton Loneman Resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>
    </ContentView>
  );
}

export default Resume;
