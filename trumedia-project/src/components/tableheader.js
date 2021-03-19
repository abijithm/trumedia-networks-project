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
    const [open2, setOpen2] = React.useState(false);
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

    let hits = 0;
    let abs = 0;
    let obpNum = 0;
    let obpDen = 0;
    let slgNum = 0;
    let slgDen = 0;
    var baList = [];
    var gameDateList = [];
    // let opsmetric = 0;

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

    console.log('here')
    rows.map(ro => {
        hits+=ro[10];
        abs+=ro[9];
        baList.push((hits/abs).toFixed(3))
        gameDateList.push(ro[3].split(" ")[0])
    });
    console.log(baList);

    const data = {
        labels: gameDateList,
        datasets: [
          {
            label: "Batting Average",
            data: baList,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
        //   {
        //     label: "Second dataset",
        //     data: [33, 25, 35, 51, 54, 76],
        //     fill: false,
        //     borderColor: "#742774"
        //   }
        ]
      };

    
  
    const handleOpen = (playerId, fullName, playerImage, gameDate, abbrevName, teamImage, oppAbbrevName, oppImage, PA, AB, H, BB, K, HBP, SF, TB, RBI) => {
        let gameSummary = fullName + " went " + H + "/" + AB + " against " + oppAbbrevName + " on " + gameDate.split(" ")[0];
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
        setBa(ba);
        let obp = (AB + BB + HBP)/(PA + BB + HBP + SF)
        setObp(obp);
        let slg = TB/PA;
        setSlg(slg);
        let ops = obp + slg;
        setOps(ops);
        setModalText(gameSummary);
        console.log(fullName);
        setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen2 = () => {
        setOpen2(true);
    }

    const plotMetric = () => {
        // console.log(open2)
        setOpen2(true);
        let stat=[];
        // if(metric=="BA"){
        //     stat=baList;
        // }
        // console.log(stat)
    };

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
                            <StyledTableCell onClick={() =>plotMetric()}>BA</StyledTableCell>
                            <StyledTableCell>OBP</StyledTableCell>
                            <StyledTableCell>SLG</StyledTableCell>
                            <StyledTableCell>OPS</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
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
                <Modal
                    align="center"
                    open={open2}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    <div style={modalStyle} className={classes.paper}>
                        <Line
                            data={data}
                            // options={{
                            //     title:{
                            //         display:true,
                            //         text:'Batting avg over season per game',
                            //         fontSize:20
                            //     },
                            //     legend:{
                            //         display:true,
                            //         position:'right'
                            // }
                            // }}
                            /> 
                    </div>
                </Modal>
            </TableContainer>
        </Paper>    
    )
}