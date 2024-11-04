// src/Courses/EnrollmentModal.jsx
import React, { useState } from 'react';

const EnrollmentModal = ({ onClose, onSuccess, errorMessage }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');

  const handleNameChange = (e) => setName(e.target.value);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.length <= 13) {
      setPhone(value);  
    }
  };

  const handleSubmit = () => {
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
    if (!nameRegex.test(name)) {
      alert('Введите корректное имя');
      return;
    }
    onSuccess();
    onClose();
  };

  return (
    <div className="enrollment-modal">
      <div className="enrollment-modal__content">
        <h2>Юнусабад</h2>
        <p>Ташкент, Шахрисабз 7, здание главпочтамта</p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="+998 99-999-9999"
          value={phone}
          onChange={handlePhoneChange}
          onFocus={() => setPhone('+998 ')}
        />
        <button className="enrollment-modal__button" onClick={handleSubmit}>Записаться</button>
        {errorMessage && <p className="enrollment-modal__error">{errorMessage}</p>}
        <button className="enrollment-modal__close" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default EnrollmentModal;
