import React, { useState } from 'react';

function FileUpload() {
    const [fileName, setFileName] = useState("");

    const uploadFile = () => {
        fetch('http://localhost:5005/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: fileName, url: `/uploads/${fileName}` })
        }).then(res => res.json());
    };

    return (
        <div>
            <h2>File Upload</h2>
            <input type="text" placeholder="File name" onChange={(e) => setFileName(e.target.value)} />
            <button onClick={uploadFile}>Upload</button>
        </div>
    );
}

export default FileUpload;