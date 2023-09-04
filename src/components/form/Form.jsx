import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const nagivate = useNavigate();

  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    nagivate(`/user/${userName}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='User Name' onChange={(e) => setUserName(e.target.value)} />
        <input type="submit" value="Find" />
      </form>
    </div>
  )
}

export default Form