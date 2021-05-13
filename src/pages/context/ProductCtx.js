import React, { useState } from 'react';
import { productCon, productSubTypeCon, productTypeCon, productStorage } from '../context/CollectionsName/names'
import sizeDatas, { tempdata } from '../localdata/product_size'
export const ProductContext = React.createContext();
export const ProductProvider = (props) => {
    const productModel = {
        id: "1",
        link: "",
        name: "",
        sizes: [{
        }],
        image: "",
        price: "",
        salePrice: "0",
        typeId: "1",
        subTypeId: "",
    };

    const errorModel =
    {
        id: { show: false },
        link: { show: false },
        name: { show: false },
        image: { show: false },
        salePrice: { show: false },
        sizes: { show: false },
        price: { show: false },
        typeId: { show: false },
        subTypeId: { show: false },
    }


    const [mainImage, setMainImage] = React.useState("");
    const [sizes, setSizes] = useState(sizeDatas)
    const [product, setProduct] = useState(productModel);
    const [products, setProducts] = useState(null);
    const [productTypes, setProductTypes] = useState([]);
    const [productSubTypes, setProductSubTypes] = useState([]);
    const [updateAction, setUpdateAction] = useState(false);
    const [errorMsg, setErrorMsg] = useState(errorModel);
    const [eventLoading, setEvent] = useState(false);

    const getProducts = async () => {
        productCon.get().then((collections) => {
            const datas = collections.docs.map((product) => product.data());
            setTableLoading(datas, false, false);
            console.log("datas" + datas.length);
        }).catch((ex) => {
            console.log("error" + ex);
            setTableLoading([], false, false);
        });

    }
    const getProductTypes = async () => {
        productTypeCon.get().then((collections) => {
            const datas = collections.docs.map((product) => product.data());
            setProductTypes(datas);
            getProductSubTypes();
            console.log("datas" + datas.length);
        }).catch((ex) => {
            console.log("error" + ex);
            setTableLoading([], false, false);
        });
    }

    const getProductSubTypes = async () => {
        productSubTypeCon.get().then((collections) => {
            const datas = collections.docs.map((product) => product.data());
            setProductSubTypes(datas);
            console.log("datasSub" + datas);
        }).catch((ex) => {
            console.log("error" + ex);

        });
    }
    React.useEffect(() => {
        console.log("duudaglaa");
        getProductTypes();
    }, [])

    const [table, setTable] = useState({
        loading: true,
        error: false
    });
    const [formValid, setFormValid] = useState(false);

    const addProduct = () => {
        setEventLoading(true, false);
        product.sizes = sizes.filter(el => {
            return el.selected
        });
        uploadImageFirebase();

    }

    const uploadImageFirebase = () => {
        const id = new Date().getTime();
        productStorage.ref(id.toString())
            .putString(mainImage.split(',')[1], `base64`, { contentType: `image/png` })
            .then(responce => {
                responce.ref.getDownloadURL().then(downloadURL => {
                    product.image = downloadURL;
                    setProduct(product);
                    addProductData();
                });
            }).catch(ex => {
                setEventLoading(false, false);
                alert("Зураг нэмхэд алдаа гарлаа" + ex.toString());
            }).finally();
    }



    const clearInputImage = () => {
        document.getElementById("exampleInputFile").value = '';
    }
    const addProductData = () => {
        productCon.doc().set(product).then(() => {
            alert(updateAction ? "Ажилттай заслаа" : "Ажилттай нэмлээ");
            setMainImage("");
            setUpdateAction(false);
            setSizes(tempdata);
            setFormValid(false);
            setProduct(productModel);
            setEventLoading(false);
            clearInputImage();

        }).catch((ex) => {
            setEventLoading(false);
            alert(updateAction ? "Засхад алдаа гарлаа " + ex.toString() : "Нэмхэд алдаа гарлаа " + ex.toString());
        });
    }

    const setEventLoading = (isLoading) => {
        console.log("orloo", isLoading)
        setEvent(isLoading);
    }

    const setTableLoading = (products, isLoading, error) => {
        table.loading = isLoading;
        table.error = error;
        setTable(table);
        setProducts(products);
    }



    return <ProductContext.Provider value={{ eventLoading, mainImage, setMainImage, sizes, setSizes, errorModel, productModel, updateAction, products, table, product, productTypes, productSubTypes, errorMsg, formValid, setErrorMsg, setProduct, setFormValid, addProduct, setUpdateAction, getProducts }}>{props.children}</ProductContext.Provider>
}