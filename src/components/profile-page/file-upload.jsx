/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { storage } from '../../firebase';
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 } from 'uuid';

function FileUpload({ id , name}) {
  const [fileUpload, setfileUpload] = useState(null);
  const [fileUrl, setfileUrl] = useState(null)
  const [fileName, setfileName] = useState(null)
  const fileListRef = ref(storage, `${id}/files/${name}`);

  const uploadFile = () => {
    console.log(fileUpload)
    if (fileUpload === null) return;
    const fname = fileUpload.name;
    const fileId = v4();
    const fileRef = ref(storage, `${id}/files/${name}/${fname}_$_${fileId}`);
    uploadBytes(fileRef, fileUpload).then(() => {
      alert("file uploaded")
      setfileName(`${fname}_$_${fileId}`)
    });
  }

  const deleteFile = (file) => {
    console.log("file name :" +fileName)
    const fileRef = ref(storage, `${id}/files/${name}/${file}`)
    deleteObject(fileRef).then(() => {
      alert("file deleted");
    }).catch((error) => {
      console.error("Error deleting file:", error);
    });
  }

  const handleFileClick = () => {
    listAll(fileListRef).then((res)=>{
      Promise.all(res.items.map((item) => getDownloadURL(item)))
              .then((urls) => {
                  setfileUrl(urls)
                  window.open(urls[0])
              })
              .catch((error) => {
                  console.error("Error getting download URLs:", error);
              });
    })
  }

  function handleChange(event) {
    setfileUpload(event.target.files[0]);
  }

  return (
    <div className="App text-lg">
        <h1>{name}</h1>
        <div className="flex items-center justify-between">
          <input type="file" onChange={handleChange} />
          <div className="flex gap-4">
            <button
              className="bg-[#313236] px-4 py-2 rounded-md text-lg"
              onClick={uploadFile}
            >
              Upload
            </button>
            <button 
            className="bg-[#313236] rounded-md text-lg h-10 px-2 "
            onClick={()=>handleFileClick(fileUrl)}
            >
              <Icon icon="solar:file-download-bold-duotone" />
            </button>
            <button className="bg-[#313236] rounded-md text-lg h-10 px-2  "
            onClick={()=>deleteFile(fileName)}
            >
              <Icon icon="mingcute:delete-2-line" />
            </button>
          </div>
        </div>
    </div>
  );
}

export default FileUpload;
