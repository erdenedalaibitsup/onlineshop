import { Update } from '@material-ui/icons'
import React from 'react'
import DangerButton from '../ui/Buttons/DangerButton'
import UpdateButton from '../ui/Buttons/UpdateButton'
const ProductSubTypeDataTable = (props) => {

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Төрлийн жагсаалт</h3>
            </div>
            <div className="card-body" >
                <table id="productTypeTable" className="table table-striped table-hover  ">
                    <thead>
                        <tr>
                            <th>Дугаар</th>
                            <th>Нэр</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.subTypes.map((el, index) => {
                            return [<tr key={index}>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>
                                    <UpdateButton text="Засах" onClick={() => {
                                        props.updateButtonAction(el);
                                    }}></UpdateButton>
                                </td>
                                <td>
                                    <DangerButton className="btn btn-danger" text="Устгах"></DangerButton>
                                </td>
                            </tr>]
                        })}
                    </tbody>

                    <tfoot>
                        <tr>
                            <th>Дугаар</th>
                            <th>Нэр</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default ProductSubTypeDataTable;