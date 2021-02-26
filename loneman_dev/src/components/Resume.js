import React from "react";

import "../App.css";
import { Document, Page, pdfjs } from "react-pdf";
import { ContentView } from "../styled-components/structure";
function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <ContentView>
      <Document
        file="/documents/Clayton Loneman Resume.pdf"      >
        <Page pageNumber={1} />
      </Document>
    </ContentView>
  );
}

export default Resume;
