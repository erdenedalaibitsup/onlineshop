import React from 'react'

// import { makeStyles } from '@material-ui/core/styles';

import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
// const useStyles = makeStyles({
//     root: {
//         background: 'rgba(255, 204, 0)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'black',
//         '&:hover': {
//             backgroundColor: 'rgba(0,128,0,0.8)',
//             color: 'black',
//             outline: "blue"
//         },
//         '&:focus': {
//             outline: "green"
//         },

//     },
// });
const Index = (props) => {
    // const classes = useStyles();
    return <Button onClick={props.onClick} disabled={props.disabled ? "disabled" : ""} color="primary" variant="contained" className={props.className} startIcon={<EditIcon></EditIcon>}  >{props.text}</Button>
}

export default Index;