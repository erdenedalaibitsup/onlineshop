import React from 'react'
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const Index = (props) => {
    return <div>
        <label>{props.title}</label>
        <div className="input-group">
            <div className="custom-file">
                <label htmlFor="imageUpload">
                    <Button variant="contained" color="primary" component="span" startIcon={<PhotoCamera></PhotoCamera>}>  Зураг оруулах</Button>
                </label>
                <input type="file" style={{ display: "none" }} name={props.name} onChange={props.onChange} id="imageUpload" />
                {/* <label className="custom-file-label" id='exampleInputFileLebel' htmlFor="exampleInputFile">Зураг сонгох...</label> */}
            </div>


        </div>
        {/* <p className={css.errorMsg}>{props.errorMsg}</p> */}
    </div>
}
export default Index;