import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import iconeSearch from "../../assets/iconSearch.png"

import "./Form.css"

const Form = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    if (userName !== '') {
      navigate(`/user/${userName}`);
    } else {
      alert("Você precisa informar o username");
    }
  }

  return (
    <div className='form'>
      <input autoFocus className='inputUserName' type="text" placeholder='User Name' onChange={(e) => setUserName(e.target.value)} />
      <img className='inputButtonSearch' src={iconeSearch} alt="search--v1" onClick={handleSubmit} />
    </div>
  )
}

export default Form
