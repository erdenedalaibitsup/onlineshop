import React from 'react'
import InputField from '../../ui/InputField'
const Index = (props) => {

    return <div>
        <div className="form-group">
            <InputField title="Төрлийн дугаар:" disabled={props.updateAction} value={props.type && props.type.id} name="id" type="number" onChange={props.handleInputChange} className={"form-control"}
                placeholder="Төрлийн дугаар" errorMsg={props.errorMsg.id.show && props.errorMsg.id.message}
            ></InputField>

        </div>

        <div className="form-group">
            <InputField title="Дэд төрлийн нэр:" disabled={props.updateAction} value={props.type && props.type.name} name="name" type="number" onChange={props.handleInputChange} className={"form-control"}
                placeholder="Дэд төрлийн нэр" errorMsg={props.errorMsg.name.show && props.errorMsg.name.message}
            ></InputField>
        </div>
    </div>
}
export default Index;