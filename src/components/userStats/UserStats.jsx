import React, { useEffect, useState } from 'react';

import { findStatsByUser } from '../../hooks/useFetch';
import "./UserStats.css";

const UserStats = ({ userName }) => {

    const [ratingFide, setRatingFide] = useState(0);
    const [chessDaily, setChessDaily] = useState({});
    const [chessRapid, setChessRapid] = useState({});
    const [chessBlitz, setChessBlitz] = useState({});
    const [chessBullet, setChessBullet] = useState({});
    const [chessTactics, setChessTacticts] = useState({});

    const [codeResponse, setCodeResponse] = useState(0);

    useEffect(() => {
        findStatsByUserAsync();
    }, []);

    const findStatsByUserAsync = async () => {
        const { data, codeResponse } = await findStatsByUser(userName);
        setStatsParam(data, codeResponse);
    }

    const setStatsParam = (data, codeResponse) => {
        (data.fide) ? setRatingFide(data.fide) : setRatingFide(0);
        setChessDaily(data.chess_daily);
        setChessRapid(data.chess_rapid);
        setChessBlitz(data.chess_blitz);
        setChessBullet(data.chess_bullet);
        setChessTacticts(data.tactics);
        setCodeResponse(codeResponse);
    }

    return (
        codeResponse &&
        <div className='divUserStats'>
            <h2>Stats</h2>
            <h3>Rating Fide: {ratingFide}</h3>
            {chessDaily && <h3>Chess Daily</h3>}
            {chessDaily && <div className='divStatsChessType'>
                <div>
                    <strong>{chessDaily.last.rating}</strong><br />
                    <p>Atual</p>
                </div>
                <div>
                    <strong>{chessDaily.best.rating}</strong><br />
                    <p><a href={chessDaily.best.game} target='_blank'>Melhor</a></p>
                </div>
                <div>
                    <strong>{chessDaily.record.win}</strong><br />
                    <p>Vitórias</p>
                </div>
                <div>
                    <strong>{chessDaily.record.loss}</strong><br />
                    <p>Derrotas</p>
                </div>
                <div>
                    <strong>{chessDaily.record.draw}</strong><br />
                    <p>Empates</p>
                </div>
            </div>}
            { chessRapid && <h3>Chess Rapid</h3>}
            {chessRapid && <div className='divStatsChessType'>
                <div>
                    <strong>{chessRapid.last.rating}</strong><br />
                    <p>Atual</p>
                </div>
                <div>
                    <strong>{chessRapid.best.rating}</strong><br />
                    <p><a href={chessRapid.best.game} target='_blank'>Melhor</a></p>
                </div>
                <div>
                    <strong>{chessRapid.record.win}</strong><br />
                    <p>Vitórias</p>
                </div>
                <div>
                    <strong>{chessRapid.record.loss}</strong><br />
                    <p>Derrotas</p>
                </div>
                <div>
                    <strong>{chessRapid.record.draw}</strong><br />
                    <p>Empates</p>
                </div>
            </div>}
           {chessBlitz && <h3>Chess Blitz</h3>}
            {chessBlitz && <div className='divStatsChessType'>
                <div>
                    <strong>{chessBlitz.last.rating}</strong><br />
                    <p>Atual</p>
                </div>
                <div>
                    <strong>{chessBlitz.best.rating}</strong><br />
                    <p><a href={chessBlitz.best.game} target='_blank'>Melhor</a></p>
                </div>
                <div>
                    <strong>{chessBlitz.record.win}</strong><br />
                    <p>Vitórias</p>
                </div>
                <div>
                    <strong>{chessBlitz.record.loss}</strong><br />
                    <p>Derrotas</p>
                </div>
                <div>
                    <strong>{chessBlitz.record.draw}</strong><br />
                    <p>Empates</p>
                </div>
            </div>}
            {chessBullet && <h3>Chess Bullet</h3>}
            {chessBullet && <div className='divStatsChessType'>
                <div>
                    <strong>{chessBullet.last.rating}</strong><br />
                    <p>Atual</p>
                </div>
                <div>
                    <strong>{chessBullet.best.rating}</strong><br />
                    <p><a href={chessBullet.best.game} target='_blank'>Melhor</a></p>
                </div>
                <div>
                    <strong>{chessBullet.record.win}</strong><br />
                    <p>Vitórias</p>
                </div>
                <div>
                    <strong>{chessBullet.record.loss}</strong><br />
                    <p>Derrotas</p>
                </div>
                <div>
                    <strong>{chessBullet.record.draw}</strong><br />
                    <p>Empates</p>
                </div>
            </div>}
            {chessTactics && <h3>Tactics</h3>}
            {chessTactics && <div className='divStatsChessType'>
                <div>
                    <strong>{chessTactics.highest.rating}</strong><br />
                    <p>Maior</p>
                </div>
                <div>
                    <strong>{chessTactics.lowest.rating}</strong><br />
                    <p>Menor</p>
                </div>
            </div>}
        </div>
    )
}

export default UserStats