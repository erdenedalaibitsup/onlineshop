import React from 'react'
import { Button } from '@material-ui/core'

import CancelIcon from '@material-ui/icons/Cancel';
const Index = (props) => {
    return <Button onClick={props.onClick} variant="contained" disabled={props.disabled ? "disabled" : ""} className={props.className} startIcon={<CancelIcon></CancelIcon>} >{props.text}</Button>
}

export default Index;