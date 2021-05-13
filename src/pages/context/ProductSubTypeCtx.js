import React, { useState } from 'react';
import { productSubTypeCon } from '../context/CollectionsName/names'
export const ProductSubTypeContext = React.createContext();
export const ProductSubTypeProvider = (props) => {
    const subTypeModel = {
        id: "",
        name: "",
        subTypeId: "1",
    };
    const errorModel =
    {
        id: { show: false },
        name: { show: false },
        subTypeId: { show: false },
    }

    const [subType, setSubType] = useState(subTypeModel);
    const [subTypes, setSubTypes] = useState(null);

    const [updateAction, setUpdateAction] = useState(false);
    const [errorMsg, setErrorMsg] = useState(errorModel);
    const [event, setEvent] = useState({
        loading: true,
        error: false
    });

    const [table, setTable] = useState({
        loading: true,
        error: false
    });
    const [formValid, setFormValid] = useState(false);

    React.useEffect(() => {
        getProductSubType();
    }, []);

    const getProductSubType = () => {
        productSubTypeCon.get().then((collections) => {
            const datas = collections.docs.map((subType) => subType.data());
            setTableLoading(datas, false, false);
            console.log("datas" + datas.length);
        }).catch((ex) => {
            console.log("error" + ex);
            setTableLoading([], false, false);
        });
    }

    const addProductSubType = () => {
        setTableLoading(subTypes, true, false);
        productSubTypeCon.doc(subType.id).set(subType).then((collections) => {
            getProductSubType();
            setSubType({ id: "", name: "" });
            setUpdateAction(false);
            alert(updateAction ? "Ажилттай заслаа" : "Ажилттай нэмлээ");

        }).catch((ex) => {
            console.log("error" + ex);
            setTableLoading(subTypes, false, false);
            alert(updateAction ? "Засхад алдаа гарлаа " : "Нэмхэд алдаа гарлаа ");
        });

    }

    const setEventLoading = (subType, isLoading, error) => {
        event.loading = isLoading;
        event.error = error;
        setSubType(subType);
        setEvent(event);
        setSubType({
            id: "",
            name: ""
        });
        setFormValid(false);
    }

    const setTableLoading = (subTypes, isLoading, error) => {
        table.loading = isLoading;
        table.error = error;
        setTable(table);
        setSubTypes(subTypes);
    }



    return <ProductSubTypeContext.Provider value={{ errorModel, subTypeModel, updateAction, subTypes, table, subType, errorMsg, formValid, event, setErrorMsg, setSubType, setFormValid, addProductSubType, setUpdateAction }}>{props.children}</ProductSubTypeContext.Provider>
}