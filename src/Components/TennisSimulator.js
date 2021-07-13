import React from 'react';
import styled from 'styled-components';
import Side from './Side';

const MainWrapper = styled.div`
    text-align: center;
`

const SideWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
`

const Button = styled.button`
    background: palevioletred;
    color: white;
    font-size: 1.2em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const TennisSimulator = () => {
    const gameScores = [0, 15, 30, 40];

    // state vars
    const [playerOneGameScore, setPlayerOneGameScore] = React.useState(0);
    const [playerTwoGameScore, setPlayerTwoGameScore] = React.useState(0);

    const [playerOneSetScore, setPlayerOneSetScore] = React.useState(0);
    const [playerTwoSetScore, setPlayerTwoSetScore] = React.useState(0);

    const [advantage, setAdvantage] = React.useState(null);

    const modifyScore = (player, gameScore, setScore, opponentGameScore, setGameScore, setSetScore) => {
        if ((gameScore === 3 && gameScore > opponentGameScore) || advantage === player) {
            setPlayerOneGameScore(0);
            setPlayerTwoGameScore(0);
            setSetScore(setScore+1);
            setAdvantage(null);
            alert(`Point goes to Player ${player+1}`);
        } else if (advantage != null) {
            setAdvantage(null);
            alert('Deuce');
        } else if (gameScore === 3 && gameScore === opponentGameScore) {
            setAdvantage(player);
            alert(`Player ${player+1} Advantage`);
        } else if (gameScore === 2 && opponentGameScore === 3) {
            setGameScore(gameScore+1);
            alert('Deuce');
        } else {
            setGameScore(gameScore+1);
        }
    };

    const handleAddScoreClick = (player) => {
        if (player === 0) {
            modifyScore(player, playerOneGameScore, playerOneSetScore, playerTwoGameScore,setPlayerOneGameScore, setPlayerOneSetScore);
        } else {
            modifyScore(player, playerTwoGameScore, playerTwoSetScore, playerOneGameScore, setPlayerTwoGameScore, setPlayerTwoSetScore);
        }
    };

    const resetGame = () => {
        setPlayerOneGameScore(0);
        setPlayerTwoGameScore(0);
        setPlayerOneSetScore(0);
        setPlayerTwoSetScore(0);
    }
    
    return (
        <MainWrapper>
            <SideWrapper>
                <Side 
                    player={0}
                    gameScore={gameScores[playerOneGameScore]} 
                    setScore={playerOneSetScore}
                    handleAddScoreClick={handleAddScoreClick}
                />
                <Side 
                    player={1}
                    gameScore={gameScores[playerTwoGameScore]} 
                    setScore={playerTwoSetScore}
                    handleAddScoreClick={handleAddScoreClick}
                />
            </SideWrapper>
            <Button onClick={resetGame}>Reset Game</Button>
        </MainWrapper>
    );
}

export default TennisSimulator;
