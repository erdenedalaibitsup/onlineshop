import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles({
//     root: {
//         background: 'rgba(255, 140,0 ,0.9)',
//         border: 0,
//         borderRadius: 3,
//         color: 'white',
//         '&:hover': {
//             backgroundColor: 'rgba(255, 140,0)',
//             color: 'white   ',
//             outline: "blue"
//         },
//         '&:focus': {
//             outline: "green"
//         },

//     },
// });
const Index = (props) => {
    // const classes = useStyles();
    return <Button variant="contained" onClick={props.onClick} disabled={props.disabled ? "disabled" : ""} color="primary" className={props.className} startIcon={props.icon}>{props.text}</Button>
}

export default Index;