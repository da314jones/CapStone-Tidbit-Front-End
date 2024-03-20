import React, { useState } from 'react';
import BaseModal from './BaseModal';

export default function CreateVideoMetadataModal({ isOpen, onClose }) {
    const [metadata, setMetadata] = useState({ title: '', description: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMetadata(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(metadata);
        onClose();
    };

    
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit} className='metadata-form'>
            <label>
                Title:
                <input name="title" value={metadata.title} onChange={handleChange}  />
            </label>
            <label>
                Description:
                <textarea name="description" value={metadata.description} onChange={handleChange}  />
            </label>
            <button type="submit">Create</button>
        </form>
          </BaseModal>
  ); 
};