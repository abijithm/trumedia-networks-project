import React, {Component} from 'react'
// import "trumedia-project/src/App.css"
import Tableheader from './tableheader'

export default function Player(props){

    const {
        playerData
    } = props

    var rows = playerData.data.map(function(obj) {
        return Object.keys(obj).map(function(key) { 
          return obj[key];
        });
      });
    var header = Object.keys(playerData.data[0])
    return (
        <div>
            <Tableheader
                playerId={header[0]}
                fullName={header[1]}
                playerImage={header[2]}
                gameDate={header[3]}
                abbrevName={header[4]}
                teamImage={header[5]}
                oppAbbrevName={header[6]}
                oppImage={header[7]}
                PA={header[8]}
                AB={header[9]}
                H={header[10]}
                HR={header[11]}
                BB={header[12]}
                K={header[13]}
                HBP={header[14]}
                SF={header[15]}
                TB={header[16]}
                RBI={header[17]}  
                rows={rows}         
            >
            </Tableheader>
        </div>
    );
}
