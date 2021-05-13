import React from 'react'
import SaveButton from '../../ui/Buttons/SaveButton'
import UpdateButton from '../../ui/Buttons/UpdateButton'
import CancelButton from '../../ui/Buttons/CancelButton'
//icons import
const Index = (props) => {
    return (
        props.updateAction ? <div className="text-right">
            <UpdateButton onClick={props.add} disabled={!props.formValid} text={"Засах"}></UpdateButton>
            <CancelButton onClick={props.cancelButtonAction} className={"ml-2"} disabled={false} text={"Буцах"}></CancelButton>
        </div> : <div className="text-right">
            <SaveButton onClick={props.add} disabled={!props.formValid} text={"Хадгалах"}></SaveButton>
        </div>

    );
}

export default Index;