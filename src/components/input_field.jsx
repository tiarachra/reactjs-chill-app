import React from 'react';

const InputField = ({ label, type, id, name, placeholder, required = true }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        required={required} 
      />
      {type === 'password' && <img src="/images/eye-off.png" alt="eye-off-icon" />}
    </div>
  );
};

export default InputField;