import React from 'react'
import WarningButton from '../../ui/Buttons/WarningButton'
import DangerButton from '../../ui/Buttons/DangerButton'
import CheckIcon from '@material-ui/icons/CheckBoxRounded';
import InputField from '../../ui/InputField'
import UnCheckIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import Switch from '../../ui/Switch'
const Index = (props) => {
    const index = props.index;
    const el = props.el;
    return <div className="row mt-1 ml-1">
        <InputField
            name="value"
            type="text"
            value={el.value}
            onChange={(event) => { props.handleInputSize(event, index) }}
            placeholder={"Хэмжээс " + (index + 1)}
            parentClassName="col-2 ml-2"
            errorMsg={el.value == ""}
            autoComplete="off"
            min="0"
        ></InputField>
        {el.selected ? <WarningButton icon={<CheckIcon></CheckIcon>} text={"Сонгогдсон"} onClick={() => { props.selectSize(index) }} className={"ml-2"}></WarningButton> : <WarningButton icon={<UnCheckIcon></UnCheckIcon>} text={"Сонгох"} className={"ml-2"} onClick={() => { props.selectSize(index) }} ></WarningButton>}


        {el.selected && <div className="form-check">
            <Switch className="form-check-input ml-0" onChange={() => { props.stateEvent(index) }} checked={el.state} id={index} text={el.state ? "Бэлэн байгаа" : "Бэлэн байхгүй"} />
            {/* <label className="form-check-label ml-3" htmlFor={index}>/label> */}
        </div>}
        {el.state && <InputField
            name="quantity"
            type="text"
            value={el.quantity}
            onChange={(event) => { props.handleInputSize(event, index) }}
            errorMsg={el.quantity == ""}
            placeholder="Тоо шир"
            parentClassName="col-1 ml-2"
            autoComplete="off"
            min="0"
        ></InputField>}
        <DangerButton key={index} onClick={() => { props.removeSize(index) }} className={"ml-1"} text={"хасах"}></DangerButton>

    </div>
}

export default Index;