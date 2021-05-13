import React from "react";
import ProductAdd from "../components/ProductAdd";
import ProductControl from "../components/Control";
import { ProductContext } from '../../context/ProductCtx'
import { validation } from '../../util/validator'
import { sizeModel } from '../../localdata/product_size'
import Resizer from 'react-image-file-resizer';
import handleInputChanger from '../handleInputChanger/index'
import css from '../dataTable/style.module.css'
const Proudct = () => {

  const ctx = React.useContext(ProductContext);
  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const validationTypes = {

    };
    const validate = validation(
      value,
      validationTypes[name],
    );
    handleInputChanger(event, validate, Resizer, (uri) => ctx.setMainImage(uri), ctx.product, ctx.errorMsg
      , (product) => ctx.setProduct(product), (errorMsg) => ctx.setErrorMsg(errorMsg), (formValid) => ctx.setFormValid(formValid));
  }

  const updateButtonAction = (type) => {
    ctx.setType({ ...ctx.typeModel, ...type });
    ctx.setUpdateAction(true);
    ctx.setErrorMsg(ctx.errorModel);

  }

  const cancelButtonAction = () => {
    ctx.setProduct(ctx.product);
    ctx.setFormValid(false);
    ctx.setUpdateAction(false);
    ctx.setErrorMsg(ctx.errorModel);
  }
  const handleInputSize = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    ctx.sizes[index][name] = value;
    ctx.setSizes([...ctx.sizes]);

  }
  const removeSize = (index) => {
    ctx.sizes.splice(index, 1);
    ctx.setSizes([...ctx.sizes]);
  }
  const addSize = () => {
    ctx.sizes.push({ ...sizeModel });

    ctx.setSizes([...ctx.sizes]);
  };
  const stateEvent = (index) => {
    ctx.sizes[index].state = !ctx.sizes[index].state;

    ctx.setSizes([...ctx.sizes]);
  }

  const selectSize = (index) => {
    ctx.sizes[index].selected = !ctx.sizes[index].selected;

    ctx.setSizes([...ctx.sizes]);
  }

  return (
    <div className="content-wrapper" style={{ backgroundColor: "#fff" }}>
      <div>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">

              {ctx.eventLoading ? <div className={css.loader}></div> : <div className="col-12">
                <ProductAdd selectSize={selectSize} stateEvent={stateEvent} addSize={addSize} removeSize={removeSize} handleInputSize={handleInputSize} sizes={ctx.sizes} product={ctx.product} productTypes={ctx.productTypes} productSubTypes={ctx.productSubTypes} errorMsg={ctx.errorMsg} handleInputChange={handleInputChange} ></ProductAdd>
                <ProductControl formValid={ctx.formValid} updateAction={ctx.updateAction} setUpdateAction={ctx.setUpdateAction}
                  cancelButtonAction={cancelButtonAction}
                  formValid={ctx.formValid} add={ctx.addProduct}></ProductControl>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proudct;