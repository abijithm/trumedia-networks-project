import React, {Component} from 'react' 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    rowz: {
        color: 'red'
    }
  });

//playerId, fullName, playerImage, gameDate, abbrevName, teamImage, oppAbbrevName, oppImage, PA, AB, H, BB, K, HBP, SF, TB, RBI
export default function Tableheader(props){
    const classes = useStyles();

    const {
        playerId, 
        fullName, 
        playerImage,
        gameDate, 
        abbrevName, 
        teamImage, 
        oppAbbrevName, 
        oppImage, 
        PA, 
        AB, 
        H, 
        HR,
        BB, 
        K, 
        HBP, 
        SF, 
        TB, 
        RBI,
        rows
    } = props;


    return(
        <TableContainer component={Paper}>

            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{playerId.name}</TableCell>
                        <TableCell>{fullName.name}</TableCell>
                        <TableCell>{playerImage.label}</TableCell>
                        <TableCell>{gameDate.name}</TableCell>
                        <TableCell>{abbrevName.label}</TableCell>
                        <TableCell>{teamImage.label}</TableCell>
                        <TableCell>{oppAbbrevName.label}</TableCell>
                        <TableCell>{oppImage.label}</TableCell>
                        <TableCell>{PA.name}</TableCell>
                        <TableCell>{AB.name}</TableCell>
                        <TableCell>{H.name}</TableCell>
                        <TableCell>{HR.name}</TableCell>
                        <TableCell>{BB.name}</TableCell>
                        <TableCell>{K.name}</TableCell>
                        <TableCell>{HBP.name}</TableCell>
                        <TableCell>{SF.name}</TableCell>
                        <TableCell>{TB.name}</TableCell>
                        <TableCell>{RBI.name}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow>
                            {/* {row.map(col=>{
                                <TableCell className={classes.rowz}>{col}</TableCell>
                            })} */}
                            {/* { row.forEach(i => {
                                // console.log(i)
                                    return (
                                        // console.log(i)
                                        <TableCell>{[row]}</TableCell>
                                    )
                                })
                            } */}
                            <TableCell>{row[0]}</TableCell>
                            <TableCell>{row[1]}</TableCell> 
                            <Avatar alt="Josh Belll" src={row[2]}/>
                            <TableCell>{row[3]}</TableCell> 
                            <TableCell>{row[4]}</TableCell>
                            <Avatar alt="Team Image" src={row[5]}/>
                            <TableCell>{row[6]}</TableCell>
                            <Avatar alt="Opponent Image" src={row[7]}/>
                            <TableCell>{row[8]}</TableCell>
                            <TableCell>{row[9]}</TableCell> 
                            <TableCell>{row[10]}</TableCell>
                            <TableCell>{row[11]}</TableCell> 
                            <TableCell>{row[12]}</TableCell>
                            <TableCell>{row[13]}</TableCell> 
                            <TableCell>{row[14]}</TableCell>
                            <TableCell>{row[15]}</TableCell> 
                            <TableCell>{row[16]}</TableCell>
                            <TableCell>{row[17]}</TableCell> 
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )


    return(
        <div>
            <table>
                    <tr>
                        <th>
                            {playerId.name}
                        </th>
                    </tr>
            </table>
        </div>

        // <table>
        //     <tbody>
        //         <tr>
        //             <td>
        //                 <h5>{playerId}</h5>
        //             </td>
        //             <td>
        //                 <h5>{fullName}</h5>
        //             </td>
        //             <td>
        //                 <h5>{playerImage}</h5>
        //             </td>
        //             <td>
        //                 <h5>{gameDate}</h5>
        //             </td>
        //             <td>
        //                 <h5>{abbrevName}</h5>
        //             </td>
        //             <td>
        //                 <h5>{teamImage}</h5>
        //             </td>
        //             <td>
        //                 <h5>{oppAbbrevName}</h5>
        //             </td>
        //             <td>
        //                 <h5>{oppImage}</h5>
        //             </td>
        //             <td>
        //                 <h5>{PA}</h5>
        //             </td>
        //             <td>
        //                 <h5>{AB}</h5>
        //             </td>
        //             <td>
        //                 <h5>{H}</h5>
        //             </td>
        //             <td>
        //                 <h5>{BB}</h5>
        //             </td>
        //             <td>
        //                 <h5>{K}</h5>
        //             </td>
        //             <td>
        //                 <h5>{HBP}</h5>
        //             </td>
        //             <td>
        //                 <h5>{SF}</h5>
        //             </td>
        //             <td>
        //                 <h5>{TB}</h5>
        //             </td>
        //             <td>
        //                 <h5>{RBI}</h5>
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
    
    )
}
