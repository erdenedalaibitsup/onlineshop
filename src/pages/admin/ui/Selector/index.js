import React from 'react'

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
const Index = (props) => {
    return <div>
        <InputLabel id="label">{props.title}</InputLabel>

        <TextField
            select

            disabled={props.disabled && "disabled"}
            labelId={props.name + "-label"}
            id={props.name}
            name={props.name}
            value={props.value}
            className="col-12"
            onChange={props.onChange}
        >
            {props.options.map((el) => {
                return <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>
            })}
        </TextField>
        {/* <label>{props.title}</label>
        <select
            disabled={props.disabled && "disabled"}
            name={props.name}
            className={props.className}
            value={props.value}
            onChange={props.onChange}
        >
            <option value=""></option>
            {props.options.map((el) => {
                return <option key={el.id} value={el.id}>{el.name}</option>
            })}
        </select>
        <p className={css.errorMsg}>{props.errorMsg}
        </p> */}
    </div>
}

export default Index;