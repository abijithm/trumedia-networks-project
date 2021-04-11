import React, {Component} from 'react'
// import "trumedia-project/src/App.css"
import joshbell from "../mlb-605137.json"
import Tableheader from './tableheader'

export default function JoshBell(props){
    // console.log(joshbell.header)
    // console.log(joshbell.rows)
    return (
        <div>
            <Tableheader
                playerId={joshbell.header[0]}
                fullName={joshbell.header[1]}
                playerImage={joshbell.header[2]}
                gameDate={joshbell.header[3]}
                abbrevName={joshbell.header[4]}
                teamImage={joshbell.header[5]}
                oppAbbrevName={joshbell.header[6]}
                oppImage={joshbell.header[7]}
                PA={joshbell.header[8]}
                AB={joshbell.header[9]}
                H={joshbell.header[10]}
                HR={joshbell.header[11]}
                BB={joshbell.header[12]}
                K={joshbell.header[13]}
                HBP={joshbell.header[14]}
                SF={joshbell.header[15]}
                TB={joshbell.header[16]}
                RBI={joshbell.header[17]}  
                rows={joshbell.rows}              
            >
            </Tableheader>
        </div>
    );
}

{/* <div key={key}>


<TableHeader 
  key={key}
  playerId={column.playerId}
  fullName={column.fullName}
  playerImage={playerImage}
  gameDate={gameDate}
  abbrevName={abbrevName}
  teamImage={teamImage}
  oppAbbrevName={oppAbbrevName}
  oppImage={oppImage}
  PA={PA}
  AB={AB}
  HBB={HBB}
  K={K}
  HBP={HBP}
  SF={SF}
  TB={TB}
  RBI={RBI}
></TableHeader>
</div> */}