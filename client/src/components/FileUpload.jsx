import React from "react";
import Input from "./Input";

import "../styles/App.css";

function FileUpload({ onFileUploaded, cvFile }) {
  const handleUploadCvFile = (event) => {
    onFileUploaded(event.target.files[0]);
  };

  return (
    <div className="box">
      <h2>Upload CV File (Optional)</h2>
      <Input type="file" onChange={handleUploadCvFile} />
      {cvFile && <p>Selected file: {cvFile.name}</p>}
    </div>
  );
}

export default FileUpload;
