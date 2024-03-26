import React from 'react';
import BaseModal from './BaseModal';

export default function ConfirmationModal({ isOpen, onClose, onConfirm, message }) {

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
        <p>{message}</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      
    </BaseModal>
  );
}