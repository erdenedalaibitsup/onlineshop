import React from 'react'
import TextField from '@material-ui/core/TextField';
const Index = (props) => {
    return <div className={props.parentClassName}>
        <TextField id={props.name} className={props.className} label={props.title} disabled={props.disabled ? "disabled" : ""}
            variant="standard"
            value={props.value}
            name={props.name}
            type={props.type}
            error={props.errorMsg}
            onChange={props.onChange}
            placeholder={props.placeholder} />
        <p style={{ color: "Red" }}>{props.errorMsg}</p>

    </div>
}
export default Index;