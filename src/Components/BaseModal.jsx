import React from 'react';
import './Modal.css';

export default function BaseModal({ children, isOpen, onClose }) {
    if (!isOpen) return null;

  return (
    <div className='modal-backdrop'>
    <div className='modal-content'>
        <button ocClick={onClose} className='"close-button'>X</button>
        {children}
      </div>
    </div>
  );
}