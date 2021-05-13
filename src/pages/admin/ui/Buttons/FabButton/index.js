import React from 'react'
import Fab from '@material-ui/core/Fab';

const Index = (props) => {
    return <Fab variant="contained" onClick={props.onClick} disabled={props.disabled ? "disabled" : ""} color={props.color} className={props.className + " "} aria-label="add">{props.icon}</Fab>
}

export default Index;