import React, { useState } from 'react';
import BaseModal from './BaseModal';

export default function EditMetadataModal({ isOpen, onClose, intialData, onSave }) {
    const [metadata, setMetadata] = useState(intialData);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMetadata((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(metadata);
        onClose();
    };
    
    return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit}>
            <label>Title
                <input name="title" value={MediaMetadata.title} onChange={handleChange} />
            </label>
            <label>Description
                <input name="description" value={MediaMetadata.description} onChange={handleChange} />
            </label>
            <button type='submit'>Save Changes</button>
        </form>
      
    </BaseModal>
  );
}