import React, {Component} from 'react' 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import {Line} from 'react-chartjs-2';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles((theme) => ({
    table: {
      width: '50%',
      height: '100%'
    },
    rowz: {
        color: 'red'
    },
    head: {
        backgroundColor: "#FFFFFF"
    },
    container: {
        margin: "5%",
        maxHeight: 600,
        maxWidth: "90%"
    },
    root: {
        width: "100%",
    },
    paper: {
        position: 'absolute',
        display: 'flex',
        width: 500,
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        justifyContent: "center",
        // top: "20%",
        // left: "40%"
        // margin: "30%",
        // marginLeft: "40%"
      },
  }));

  
  function getModalStyle() {
    return {
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
    };
}
//playerId, fullName, playerImage, gameDate, abbrevName, teamImage, oppAbbrevName, oppImage, PA, AB, H, BB, K, HBP, SF, TB, RBI
export default function Tableheader(props){
    const classes = useStyles();
    const [modalText, setModalText] = React.useState("");

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [pa, setPa] = React.useState(0);
    const [ab, setAb] = React.useState(0);
    const [h, setH] = React.useState(0);
    const [hr, setHr] = React.useState(0);
    const [bb, setBb] = React.useState(0);
    const [k, setK] = React.useState(0);
    const [hbp, setHbp] = React.useState(0);
    const [sf, setSf] = React.useState(0);
    const [tb, setTb] = React.useState(0);
    const [rbi, setRbi] = React.useState(0);
    const [ba, setBa] = React.useState(0);
    const [obp, setObp] = React.useState(0);
    const [slg, setSlg] = React.useState(0);
    const [ops, setOps] = React.useState(0);
  
    const handleOpen = (playerId, fullName, playerImage, gameDate, abbrevName, teamImage, oppAbbrevName, oppImage, PA, AB, H, BB, K, HBP, SF, TB, RBI) => {
        let gameSummary = fullName + " went " + H + "/" + AB + " against " + oppAbbrevName + " on " + gameDate;
        setPa(pa+PA);
        setAb(ab+AB);
        setH(h+H);
        setHr(hr+HR);
        setBb(bb+BB);
        setK(k+K);
        setHbp(hbp+HBP);
        setSf(sf+SF);
        setTb(tb+TB);
        setRbi(rbi+RBI);
        // let ba = h/ab;
        // baList.push(ba);
        setBa(ba);
        // row[10]+row[12]+row[14])/(obpDen+=row[9]+row[12]+row[14]+row[15]
        let obp = (AB + BB + HBP)/(PA + BB + HBP + SF)
        setObp(obp);
        let slg = TB/PA;
        setSlg(slg);
        let ops = obp + slg;
        setOps(ops);
        setModalText(gameSummary);
        console.log(fullName);
        setOpen(true);
    //   body(fullName,gameDate,opponent,ab,h,hr,bb,k,hbp,sf,rbi);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const plotMetric = (metric) => {
        let stat=[];
        if(metric=="BA"){
            stat=baList;
        }
        console.log(stat)
        return(
            <Line
                data={stat}
                options={{
                    title:{
                        display:true,
                        text:'Batting avg over season per game',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                }
            }}
            />
        )
    };

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

    
    let hits = 0;
    let abs = 0;
    let obpNum = 0;
    let obpDen = 0;
    let slgNum = 0;
    let slgDen = 0;
    var baList = [];
    // let opsmetric = 0;

    return(
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader size="small" aria-label="sticky table">
                    <TableHead className={classes.head}>
                        <StyledTableRow className={classes.head}>
                            <Tooltip title={playerId.desc} placement='bottom'><StyledTableCell>{playerId.name}</StyledTableCell></Tooltip>
                            <Tooltip title={fullName.desc} placement='bottom'><StyledTableCell>{fullName.name}</StyledTableCell></Tooltip>
                            <StyledTableCell>{playerImage.label}</StyledTableCell>
                            <Tooltip title={gameDate.desc} placement='top'><StyledTableCell>{gameDate.name}</StyledTableCell></Tooltip>
                            <Tooltip title={abbrevName.desc} placement='top'><StyledTableCell>{abbrevName.label}</StyledTableCell></Tooltip>
                            <StyledTableCell>{teamImage.label}</StyledTableCell>
                            <Tooltip title={oppAbbrevName.desc} placement='bottom'><StyledTableCell>{oppAbbrevName.label}</StyledTableCell></Tooltip>
                            <StyledTableCell>{oppImage.label}</StyledTableCell>
                            <StyledTableCell>{PA.name}</StyledTableCell>
                            <StyledTableCell>{AB.name}</StyledTableCell>
                            <StyledTableCell>{H.name}</StyledTableCell>
                            <StyledTableCell>{HR.name}</StyledTableCell>
                            <StyledTableCell>{BB.name}</StyledTableCell>
                            <StyledTableCell>{K.name}</StyledTableCell>
                            <StyledTableCell>{HBP.name}</StyledTableCell>
                            <StyledTableCell>{SF.name}</StyledTableCell>
                            <Tooltip title={TB.desc} placement='bottom'><StyledTableCell>{TB.name}</StyledTableCell></Tooltip>
                            <StyledTableCell>{RBI.name}</StyledTableCell>
                            <StyledTableCell onClick={() =>plotMetric("BA")}>BA</StyledTableCell>
                            <StyledTableCell>OBP</StyledTableCell>
                            <StyledTableCell>SLG</StyledTableCell>
                            <StyledTableCell>OPS</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                    {/* onClick={gameSummary(row[1],row[2],row[5],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16]) */}
                        {rows.map(row => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => handleOpen(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17])}>
                                    <TableCell>{row[0]}</TableCell>
                                    <TableCell>{row[1]}</TableCell> 
                                    <Avatar alt="Josh Bell" src={row[2]} align="center"/>
                                    <TableCell>{row[3]}</TableCell> 
                                    <TableCell>{row[4]}</TableCell>
                                    <Avatar alt="Team Image" src={row[5]} align="center"/>
                                    <TableCell>{row[6]}</TableCell>
                                    <Avatar alt="Opponent Image" src={row[7]} align="center"/>
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
                                    <TableCell>{((hits+=row[10])/(abs+=row[9])).toFixed(3)}</TableCell>
                                    <TableCell>{((obpNum+=row[10]+row[12]+row[14])/(obpDen+=row[9]+row[12]+row[14]+row[15])).toFixed(3)}</TableCell>
                                    <TableCell>{((slgNum+=row[16])/(slgDen+=row[9])).toFixed(3)}</TableCell>
                                    <TableCell>{(((obpNum/obpDen)+(slgNum/slgDen))).toFixed(3)}</TableCell>
                                </TableRow>  
                        ))
                    }
                    </TableBody>
                </Table>
                <Modal
                    align="center"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    <div style={modalStyle} className={classes.paper}>
                        {modalText}
                    </div>
                </Modal>
            </TableContainer>
        </Paper>    

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
