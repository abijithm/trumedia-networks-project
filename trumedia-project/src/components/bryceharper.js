import React, {Component} from 'react'
// import "trumedia-project/src/App.css"
import bryceharper from "../mlb-547180.json"
import Tableheader from './tableheader'

export default function BryceHarper(){
    return (
        <div>
            <Tableheader
                playerId={bryceharper.header[0]}
                fullName={bryceharper.header[1]}
                playerImage={bryceharper.header[2]}
                gameDate={bryceharper.header[3]}
                abbrevName={bryceharper.header[4]}
                teamImage={bryceharper.header[5]}
                oppAbbrevName={bryceharper.header[6]}
                oppImage={bryceharper.header[7]}
                PA={bryceharper.header[8]}
                AB={bryceharper.header[9]}
                H={bryceharper.header[10]}
                HR={bryceharper.header[11]}
                BB={bryceharper.header[12]}
                K={bryceharper.header[13]}
                HBP={bryceharper.header[14]}
                SF={bryceharper.header[15]}
                TB={bryceharper.header[16]}
                RBI={bryceharper.header[17]}  
                rows={bryceharper.rows}              
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