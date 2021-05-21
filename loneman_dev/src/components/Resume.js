import React from "react";

import "../App.css";
import { Document, Page, pdfjs } from "react-pdf";
import { ContentView } from "../styled-components/structure";
function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div>
      <ContentView>
        <Document file="/documents/Clayton Loneman Resume 2021.pdf">
          <Page pageNumber={1} />
        </Document>
      </ContentView>
      <ContentView>
        <a
          href="/documents/Clayton Loneman Resume 2021.pdf"
          className="button cta mg-l"
          download
        >
          Download Resume (.pdf)
        </a>
      </ContentView>
    </div>
  );
}

export default Resume;
