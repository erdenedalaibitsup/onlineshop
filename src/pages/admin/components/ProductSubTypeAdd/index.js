import React from 'react'
import InputField from '../../ui/InputField'
const ProductTypeAdd = (props) => {
    return <div>
        <div className="form-group">
            <InputField title=" Дэд төрлийн дугаар:" value={props.subType && props.subType.id} name="id" type="number" onChange={props.handleInputChange} className={"form-control"}
                placeholder="Дэд төрлийн дугаар" errorMsg={props.errorMsg.id.show && props.errorMsg.id.message}
            ></InputField>
        </div>

        <div className="form-group">
            <InputField title="Дэд төрлийн нэр:" value={props.subType && props.subType.name} name="name" subType="number" onChange={props.handleInputChange} className={"form-control"}
                placeholder="Дэд төрлийн нэр" errorMsg={props.errorMsg.name.show && props.errorMsg.name.message}
            ></InputField>
        </div>
    </div>
}
export default ProductTypeAdd;