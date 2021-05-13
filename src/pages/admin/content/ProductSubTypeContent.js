import React from 'react'
import TypeTable from '../dataTable/ProductSubTypeTable'
import ProductSubTypeAdd from '../components/ProductSubTypeAdd'
import ProductSubTypeControl from '../components/Control'
import { ProductSubTypeContext } from '../../context/ProductSubTypeCtx'
import { validation, validatorTypes } from '../../util/validator'
import handleInputChanger from '../handleInputChanger'
const ProductSubTypeContent = () => {
    const ctx = React.useContext(ProductSubTypeContext);
    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const validationTypes = {
            id: validatorTypes.EQUAL,
            name: validatorTypes.POSITIVENUMBER,
            size: validatorTypes.NONE
        };
        const validate = validation(
            value,
            validationTypes[name],
            name == "id" && ctx.subTypes
        );
        handleInputChanger(event, validate, null, null, ctx.subType, ctx.errorMsg
            , (type) => ctx.setSubType(type), (errorMsg) => ctx.setErrorMsg(errorMsg), (formValid) => ctx.setFormValid(formValid));
    }
    const updateButtonAction = (subType) => {
        ctx.setSubType({ ...ctx.subTypeModel, ...subType });
        ctx.setUpdateAction(true);
        ctx.setErrorMsg(ctx.errorModel);

    }

    const cancelButtonAction = () => {
        ctx.setSubType(ctx.subTypeModel);
        ctx.setFormValid(false);
        ctx.setUpdateAction(false);
        ctx.setErrorMsg(ctx.errorModel);
    }
    return (

        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 shadow-none p-3 mb-5 bg-white rounded" >
                            <ProductSubTypeAdd updateAction={ctx.updateAction} errorMsg={ctx.errorMsg} subType={ctx.subType} handleInputChange={handleInputChange}></ProductSubTypeAdd>
                            <ProductSubTypeControl updateAction={ctx.updateAction} setUpdateAction={ctx.setUpdateAction}
                                cancelButtonAction={cancelButtonAction}
                                formValid={ctx.formValid} add={ctx.addProductSubType}> </ProductSubTypeControl>
                        </div>
                        {ctx.table.loading ? <p>loading </p> :
                            <div className="col-8"><TypeTable setSubType={ctx.setSubType} updateButtonAction={updateButtonAction} subTypes={ctx.subTypes}></TypeTable></div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductSubTypeContent;