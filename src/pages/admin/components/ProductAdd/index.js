import React from "react";
import ProductSize from '../ProductSize'
import FabButton from '../../ui/Buttons/FabButton'
import InputField from '../../ui/InputField'
import Selector from '../../ui/Selector'
import Uploader from '../../ui/Uploader'
import AddIcon from '@material-ui/icons/Add';
const Index = (props) => {
  return (
    <div>
      <div className="form-group">
        <InputField title="Барааны линк:" name="link" onChange={props.handleInputChange} type="text" value={props.product && props.product.link} placeholder="Барааны линк" errorMsg={props.errorMsg.link.show && props.errorMsg.link.message} className={"col-12"}></InputField>
      </div>
      <div className="form-group">
        <InputField title="Барааны нэр:" name="name" onChange={props.handleInputChange} type="text" value={props.product && props.product.name} placeholder="Барааны нэр" errorMsg={props.errorMsg.name.show && props.errorMsg.name.message} className={"col-12"}></InputField>
      </div>
      <div className="form-group">
        <InputField title="Барааны үнэ:" name="price" onChange={props.handleInputChange} type="number" value={props.product && props.product.price} placeholder="Барааны үнэ" errorMsg={props.errorMsg.price.show && props.errorMsg.price.message} className={"col-12"}></InputField>
      </div>

      <div className="form-group">
        <InputField title="Барааны хямдарсан үнэ:" name="salePrice" onChange={props.handleInputChange} type="number" value={props.product && props.product.salePrice} placeholder="Барааны хямдарсан үнэ" errorMsg={props.errorMsg.salePrice.show && props.errorMsg.salePrice.message} className={"col-12"}></InputField>
      </div>

      <div className="form-group">
        <Selector title="Барааны төрөл:" disabled={true} name="typeId" className="col-12" value={props.product.typeId}
          onChange={props.handleInputChange} options={props.productTypes} errorMsg={props.errorMsg.typeId.show && props.errorMsg.typeId.message} ></Selector>
      </div>

      <div className="form-group">
        <Selector title="Барааны дэд төрөл:" name="subTypeId" className="form-control" value={props.product.subTypeId}
          onChange={props.handleInputChange} options={props.productSubTypes} errorMsg={props.errorMsg.subTypeId.show && props.errorMsg.subTypeId.message} ></Selector>
      </div>
      <div className="form-group">
        <Uploader title="Барааны зураг:" name="image" onChange={props.handleInputChange} id="exampleInputFile" errorMsg={props.errorMsg.image.show && props.errorMsg.image.message}></Uploader>
      </div >
      <div className="form-group ">
        <label>Барааны хэмжээсүүд:</label>
        <div className="text-muted" >хэмжээсүүдийг сонгож эсвэл гараас оруулж болноо:</div>
        {props.sizes.map((el, index) => {
          return <div><ProductSize key={index} el={el} index={index} selectSize={props.selectSize} handleInputSize={props.handleInputSize} stateEvent={props.stateEvent} removeSize={props.removeSize}></ProductSize></div>
        })}
        <div className={"text-right col-2 mt-2 ml-2"} ><FabButton color="primary" icon={<AddIcon></AddIcon>} onClick={props.addSize} text={"Өөр хэмжээс нэмж оруулах"}></FabButton></div>
      </div>


    </div>
  );
};

export default Index;
