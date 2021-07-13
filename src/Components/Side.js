import styled, { css } from 'styled-components';

const MainWrapper = styled.div`
    padding: 1.5em;
    width: 50vw;
    text-align: center;
    border-style: groove;
    border-radius: 0.5em;
    margin: 1em 1em 1em 1em;
`

const Player = styled.div`
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 1em;
    ${props => props.player === 0 ? css`color:red` : css`color:green`};
`

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    color: palevioletred;
    background: white;
`;

const GameScoreTitleWrapper = styled.h1``

const GameScoreWrapper = styled.div`
    font-size: 10em;
    border-style: groove;
    border-radius: 0.1em;
    margin: 0em 14vw 0em 14vw;
`

const SetScoreTitleWrapper = styled.h1`
    margin-top: 1em;
`

const SetScoreWrapper = styled.div`
    font-size: 2em;
`

const Side = (props) => {
    const { gameScore, player, setScore, handleAddScoreClick } = props;

    return (
        <MainWrapper>
            <Player player={player}>
                Player {player+1}
            </Player>
            <GameScoreTitleWrapper>
                Game Score
            </GameScoreTitleWrapper>
            <GameScoreWrapper>
                {gameScore}
            </GameScoreWrapper>
            <Button onClick={() => handleAddScoreClick(player)}>
                Add Score
            </Button>
            <SetScoreTitleWrapper>
                Set Score
            </SetScoreTitleWrapper>
            <SetScoreWrapper>
                {setScore}
            </SetScoreWrapper>
        </MainWrapper>
    )
}

export default Side;
