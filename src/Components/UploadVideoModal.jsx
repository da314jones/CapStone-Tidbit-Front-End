import React, { useState } from 'react';
import BaseModal from './BaseModal';

export default function UploadVideoModal({ isOpen, onClose, onUpload }) {
    const [videoFile, setVideoFile] = useState(null);
    const [metadata, setMetadata] = useState({ title: '', description: '' });

    const handleFileChange = (e) => setVideoFile(e.target.files[0]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMetadata((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpload(videoFile, metadata);
        onClose();
    };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="video/*" />
        <input
        name='title'
        value={metadata.title}
        onChange={handleChange}
        placeholder='title'
        />
        <textarea
        name='descriptioon'
        value={metadata.description}
        onChange={handleChange}
        placeholder='description'
        />
        <button type='submit'>Upload Video</button>
      </form>
    </BaseModal>
  );
}