import { Button } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import React from 'react'
const Index = (props) => {
    return <Button variant="contained" onClick={props.onClick} disabled={props.disabled ? "disabled" : ""} color="secondary" className={props.className} startIcon={<DeleteRoundedIcon></DeleteRoundedIcon>}>{props.text}</Button>
}

export default Index;