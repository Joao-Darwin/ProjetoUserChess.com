import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findUserByName } from '../../hooks/useFetch';

import "./User.css"
// import UserStats from '../../components/userStats/UserStats';

const User = () => {

  const { userName } = useParams();

  const [loading, setLoading] = useState(true);

  const [codeResponse, setCodeResponse] = useState();
  const [avatar, setAvatar] = useState();
  const [followers, setFollowers] = useState();
  const [isStreamer, setIsStreamer] = useState();
  const [urlTwitch, setUrlTwitch] = useState();
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
    setAvatar(data.avatar);
    setFollowers(data.followers);
    setIsStreamer(data.is_streamer);
    setLeague(data.league);
    setPlan(data.status);
    setUrlUser(data.url);

    if (isStreamer) {
      setUrlTwitch(data.twitch_url);
    }

    setCodeResponse(codeResponse);
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
              {avatar && <img className='avatar' src={avatar} alt='Avatar no chess.com' />}
              <div>
                <h3>{userName}</h3>
                {league && <p>{league}</p>}<br />
              </div>
              <div className='divInfoUser'>
                {followers && <p><strong>{followers}</strong><br />Followers</p>}
                {isStreamer && <a href={urlTwitch} target='_blank'><img width="48" height="48" src="https://img.icons8.com/color/48/twitch--v1.png" alt="twitch--v1" /></a>}
                {plan && <p><strong>{plan.toUpperCase()}</strong><br />Plan</p>}
              </div>
              {/* <UserStats userName={userName}/> */}
              {urlUser && (
                <a title='See on Site' href={urlUser} target="_blank" rel="noopener noreferrer" className='linkSeeOnSite'>
                  <img width="48" height="48" src="https://img.icons8.com/color/48/info--v1.png" alt="info--v1" />
                </a>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default User