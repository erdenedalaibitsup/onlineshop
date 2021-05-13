import React, { useState } from 'react';
import { productTypeCon } from '../context/CollectionsName/names'
export const ProductTypeContext = React.createContext();
export const ProductTypeProvider = (props) => {
    const typeModel = {
        id: "",
        name: "",
    };
    const errorModel =
    {
        id: { show: false },
        name: { show: false }
    }

    const [type, setType] = useState(typeModel);
    const [types, setTypes] = useState(null);

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
        getProductType();
    }, []);

    const getProductType = () => {
        productTypeCon.get().then((collections) => {
            const datas = collections.docs.map((type) => type.data());
            setTableLoading(datas, false, false);
            console.log("datas" + datas.length);
        }).catch((ex) => {
            console.log("error" + ex);
            setTableLoading([], false, false);
        });
    }

    const addProductType = () => {
        setTableLoading(types, true, false);
        productTypeCon.doc(type.id).set(type).then((collections) => {
            getProductType();
            setType({ id: "", name: "" });
            setUpdateAction(false);
            alert(updateAction ? "Ажилттай заслаа" : "Ажилттай нэмлээ");

        }).catch((ex) => {
            console.log("error" + ex);
            setTableLoading(types, false, false);
            alert(updateAction ? "Засхад алдаа гарлаа " : "Нэмхэд алдаа гарлаа ");
        });

    }

    const setEventLoading = (type, isLoading, error) => {
        event.loading = isLoading;
        event.error = error;
        setType(type);
        setEvent(event);
        setType({
            id: "",
            name: ""
        });
        setFormValid(false);
    }

    const setTableLoading = (types, isLoading, error) => {
        table.loading = isLoading;
        table.error = error;
        setTable(table);
        setTypes(types);
    }



    return <ProductTypeContext.Provider value={{ errorModel, typeModel, updateAction, types, table, type, errorMsg, formValid, event, setErrorMsg, setType, setFormValid, addProductType, setUpdateAction }}>{props.children}</ProductTypeContext.Provider>
}