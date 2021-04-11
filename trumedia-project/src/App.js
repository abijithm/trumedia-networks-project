import React from 'react';
import './App.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import api from "./api"
import Player from "./components/player"


function App() {

  var playerDict = {};
  var gameDict = {};

  const [tempToken, setTempToken] = React.useState(null)
  const [playerList, setPlayerList] = React.useState({})
  const [gameDataList,setGameDataList] = React.useState({})

  React.useEffect( () => {

    api.getToken()
      .then(response1 =>{
        console.log(response1)
        setTempToken(response1.data.token)
        api.getPlayers(response1.data.token)
        .then( async (response2) => {
          await response2.data.forEach(player => {
            playerDict[player.fullName] = player.playerId
            api.getGameData(response1.data.token,player.playerId)
              .then(async (response3) => {
                gameDict[player.playerId] = response3
              })
          });
          setPlayerList(playerDict)
          setGameDataList(gameDict)
        })
      })
      .catch((error) => {
          console.log(error)
        })
  },[])

  const [currPlayer, setCurrPlayer] = React.useState(null);

  const handlePlayer = (event, newPlayer) => {
    setCurrPlayer(newPlayer)
  }

  function renderPlayerSwitch(currPlayer){

    if (currPlayer){
      return (
      <Player playerData={gameDataList[currPlayer]}></Player>
      )
    }
    else {
      return(
        <div style={{width: '700px', margin: '25%'}}>
          <h1>TruMedia Networks Coding Challenge - Part 2</h1>
          <h2>Click on a player to view data</h2>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <ToggleButtonGroup
        value={currPlayer}
        exclusive
        onChange={handlePlayer}
        aria-label="text alignment"
      >            
        <ToggleButton value={Object.values(playerList)[0]}>
            <a>{Object.keys(playerList)[0]}</a>
        </ToggleButton>
        <ToggleButton value={Object.values(playerList)[1]}>
            <a>{Object.keys(playerList)[1]}</a>
        </ToggleButton>
        <ToggleButton value={Object.values(playerList)[2]}>
            <a>{Object.keys(playerList)[2]}</a>
        </ToggleButton>
      </ToggleButtonGroup>
      {renderPlayerSwitch(currPlayer)}

      </div>
  );
}
export default App;