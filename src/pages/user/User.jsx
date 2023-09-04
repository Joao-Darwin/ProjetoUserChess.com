import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findUserByName } from '../../hooks/useFetch';

const User = () => {

  const [codeResponse, setCodeResponse] = useState();
  const [avatar, setAvatar] = useState();
  const [followers, setFollowers] = useState();
  const [isStreamer, setIsStreamer] = useState();
  const [league, setLeague] = useState();
  const [plan, setPlan] = useState();
  const [urlUser, setUrlUser] = useState();

  const setParamsUser = (data, codeResponse) => {
    setCodeResponse(codeResponse);
    setAvatar(data.avatar);
    setFollowers(data.followers);
    setIsStreamer(data.is_streamer);
    setLeague(data.league);
    setPlan(data.status);
    setUrlUser(data.url);
  }

  const { userName } = useParams();

  useEffect(() => {

    async function findUserByNameAsync (userName) {
      const {data, codeResponse} = await findUserByName(userName);
      console.log(data);
      setParamsUser(data, codeResponse);
    }

    findUserByNameAsync(userName);
  }, [userName])

  return (
    <div>
      {codeResponse != 200 ? <h3>User {userName} não encontrado</h3> : <h3>User: {userName}</h3>}
      {avatar && <img src={avatar} />}
      {followers && <p>Followers: {followers}</p>}
      {isStreamer && <p>Is Streamer: {isStreamer}</p>}
      {league && <p>League: {league}</p>}
      {plan && <p>Plan: {plan}</p>}
      {urlUser && <p><a href={urlUser} target='_blank'>Link user</a></p>}
    </div>
  )
}

export default User