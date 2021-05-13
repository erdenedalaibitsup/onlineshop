
export const getProductType = async (productTypeCon, data) => {
    productTypeCon.get().then((collections) => {

        return collections.docs.map((type) => { console.log("success", type.data()); type.data() });;
    }).catch((ex) => {
        console.log("error" + ex);
        return null;
    });
}