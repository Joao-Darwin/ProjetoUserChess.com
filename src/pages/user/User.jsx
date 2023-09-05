import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findUserByName } from '../../hooks/useFetch';

const User = () => {

  const { userName } = useParams();

  const [loading, setLoading] = useState(true);

  const [codeResponse, setCodeResponse] = useState();
  const [avatar, setAvatar] = useState();
  const [followers, setFollowers] = useState();
  const [isStreamer, setIsStreamer] = useState();
  const [league, setLeague] = useState();
  const [plan, setPlan] = useState();
  const [urlUser, setUrlUser] = useState();

  useEffect(() => {

    findUserByNameAsync(userName);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [userName])

  async function findUserByNameAsync(userName) {
    const { data, codeResponse } = await findUserByName(userName);
    setParamsUser(data, codeResponse);
  }

  const setParamsUser = (data, codeResponse) => {
    setCodeResponse(codeResponse);

    setAvatar(data.avatar);
    setFollowers(data.followers);
    setIsStreamer(data.is_streamer);
    setLeague(data.league);
    setPlan(data.status);
    setUrlUser(data.url);
  }

  return (
    <div>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          {codeResponse !== 200 ? (
            <h3>User {userName} não encontrado</h3>
          ) : (
            <>
              <h3>User: {userName}</h3>
              {avatar && <img src={avatar} />}
              {followers && <p>Followers: {followers}</p>}
              {isStreamer && <p>Is Streamer: {isStreamer}</p>}
              {league && <p>League: {league}</p>}
              {plan && <p>Plan: {plan}</p>}
              {urlUser && (
                <p>
                  <a href={urlUser} target="_blank" rel="noopener noreferrer">
                    Link user
                  </a>
                </p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default User