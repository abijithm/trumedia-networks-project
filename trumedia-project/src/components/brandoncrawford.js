import React, {Component} from 'react'
// import "trumedia-project/src/App.css"
import brandoncrawford from "../mlb-543063.json"
import Tableheader from './tableheader'

export default function BrandonCrawford(){
    return (
        <div>
            <Tableheader
                playerId={brandoncrawford.header[0]}
                fullName={brandoncrawford.header[1]}
                playerImage={brandoncrawford.header[2]}
                gameDate={brandoncrawford.header[3]}
                abbrevName={brandoncrawford.header[4]}
                teamImage={brandoncrawford.header[5]}
                oppAbbrevName={brandoncrawford.header[6]}
                oppImage={brandoncrawford.header[7]}
                PA={brandoncrawford.header[8]}
                AB={brandoncrawford.header[9]}
                H={brandoncrawford.header[10]}
                HR={brandoncrawford.header[11]}
                BB={brandoncrawford.header[12]}
                K={brandoncrawford.header[13]}
                HBP={brandoncrawford.header[14]}
                SF={brandoncrawford.header[15]}
                TB={brandoncrawford.header[16]}
                RBI={brandoncrawford.header[17]}  
                rows={brandoncrawford.rows}              
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