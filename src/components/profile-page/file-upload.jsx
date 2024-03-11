import React, { useState } from "react";
import axios from "axios";

function FileUpload({ heading }) {
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:5173/uploadFile";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div className="App text-lg">
      <form onSubmit={handleSubmit}>
        <h1>{heading}</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit" className="bg-[#313236] p-4 rounded-sm text-lg">
          Upload
        </button>
      </form>
    </div>
  );
}

export default FileUpload;
