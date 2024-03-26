import React, { useState } from 'react';
import BaseModal from './BaseModal';

export default function ProfileEditModal({ isOpen, onClose, intialProfile, onSave }) {
    const [profile, setProfile] = useState(intialProfile);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventdefault();
        onSave(profile);
        onClose();
    };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <label>Name:
            <input name='name' value={profile.name} onChange={handleChange} />
        </label>
        <label>Email:
            <input name='email' value={profile.email} onChange={handleChange} />
        </label>
        <button type='submit'>Save Profile</button>
      </form>
    </BaseModal>
  );
}