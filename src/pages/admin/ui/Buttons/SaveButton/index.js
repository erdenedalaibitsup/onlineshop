import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
// const useStyles = makeStyles({
//     root: {
//         background: 'rgba(0,128,0,0.8)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         '&:hover': {
//             backgroundColor: 'rgba(0,128,0)',
//             color: '#fff',
//             outline: "blue"
//         },
//         '&:focus': {
//             outline: "green"
//         },

//     },
// });
const Index = (props) => {


    // const classes = useStyles();
    return <Button onClick={props.onClick} color="primary" disabled={props.disabled ? "disabled" : ""} variant="contained" className={props.className} startIcon={< SaveIcon ></ SaveIcon>} >{props.text} </Button>
}

export default Index;