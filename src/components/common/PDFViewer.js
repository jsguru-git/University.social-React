import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class PDFViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    console.log(this.props.filePath);
    return (
      <div>
        <Document
          file={this.props.filePath}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default PDFViewer;