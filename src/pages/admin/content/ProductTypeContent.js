import React, { useState } from 'react'
import TypeTable from '../dataTable/ProductTypeTable'
import ProductTypeAdd from '../components/ProductTypeAdd'
import ProductTypeControl from '../components/Control'
import { ProductTypeContext } from '../../context/ProductTypeCtx'
import { validation, validatorTypes } from '../../util/validator'
import handleInputChange from '../handleInputChanger'
const ProductTypeContent = () => {
    const ctx = React.useContext(ProductTypeContext);
    
    const handleInputChange = (event) => {
        const validationTypes = {
            id: validatorTypes.EQUAL,
            name: validatorTypes.POSITIVENUMBER,
            size: validatorTypes.NONE
        };
    
        handleInputChange(event, validationTypes, null, null, ctx.type, ctx.errorMsg
            , ctx.setType, ctx.setErrorMsg, ctx.setFormValid);
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;
        // const validationTypes = {
        //     id: validatorTypes.EQUAL,
        //     name: validatorTypes.POSITIVENUMBER,
        //     size: validatorTypes.NONE
        // };
        // const validate = validation(
        //     value,
        //     validationTypes[name],
        //     name == "id" && ctx.types
        // );
        // let formValid = false;
        // const type = {
        //     ...ctx.type,
        //     [name]: value,
        // };
        // if (!validate.show) {
        //     let istemvavlid = true;
        //     Object.values(type).map((el, index) => {
        //         if (
        //             el.length === 0 &&
        //             Object.keys(ctx.type)[index] !== [name]
        //         ) {

        //             if (Object.keys(ctx.type)[index] !== 'size' && [name] !== 'size')
        //                 istemvavlid = false;
        //             return;
        //         }
        //     });
        //     if (istemvavlid) {
        //         formValid = true;
        //     }
        // }
        // const errorMsg = {
        //     ...ctx.errorMsg,
        //     [name]: validate,
        // }


        // ctx.setType(type);
        // ctx.setErrorMsg(errorMsg);
        // ctx.setFormValid(formValid);
    }
    const updateButtonAction = (type) => {
        ctx.setType({ ...ctx.typeModel, ...type });
        ctx.setUpdateAction(true);
        ctx.setErrorMsg(ctx.errorModel);

    }

    const cancelButtonAction = () => {
        ctx.setType(ctx.typeModel);
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
                            <ProductTypeAdd updateAction={ctx.updateAction} errorMsg={ctx.errorMsg} type={ctx.type} handleInputChange={handleInputChange}></ProductTypeAdd>
                            <ProductTypeControl updateAction={ctx.updateAction} setUpdateAction={ctx.setUpdateAction}
                                cancelButtonAction={cancelButtonAction}
                                formValid={ctx.formValid} add={ctx.addProduct}> </ProductTypeControl>
                        </div>
                        {ctx.table.loading ? <p>loading </p> :
                            <div className="col-8"><TypeTable setType={ctx.setType} updateButtonAction={updateButtonAction} types={ctx.types}></TypeTable></div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductTypeContent;