import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import "./SearchHistory.css";

const SearchHistory = () => {

  const navigate = useNavigate();
  const [historyUserNames, setHistoryUserNames] = useState([]);

  useEffect(() => {
    let userNames = findUserNamesLocalStorage();
    setHistoryUserNames(userNames);
  }, [])

  const findUserNamesLocalStorage = () => {
    let userNames = JSON.parse(localStorage.getItem('UserNames'));

    if (userNames) {
      return userNames;
    }

    return [];
  }

  const handleSubmit = (userName) => {
    navigate(`/user/${userName}`);
  }

  return (
    <>
      <h2>Histórico de Buscas</h2>
      <div className='containerSearchHistory'>
        {historyUserNames.length ? (
          historyUserNames.map((userName, index) => (
            <h3 className='userName' key={index} onClick={() => handleSubmit(userName)}>{userName}</h3>
          ))
        ) : (
          <h3>Histórico vazio</h3>
        )}
      </div>
    </>
  )
}

export default SearchHistory