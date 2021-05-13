import React from 'react'
import { Button } from '@material-ui/core'
const Index = (props) => {
    return <Button variant={props.variant} onClick={props.onClick} disabled={props.disabled ? "disabled" : ""} color={props.color} className={props.className} startIcon={props.icon}>{props.text}</Button>
}

export default Index;