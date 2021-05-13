const handleInputChanger = (event, validate, Resizer, setMainImage, model, errorMsgModel
    , setModel, setErrorMsg, setFormValid
) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const type = target.type;

    if (type == 'file') {
        if (event.target.files[0]) {
            Resizer.imageFileResizer(
                event.target.files[0],
                500,
                500,
                'png',
                100,
                0,
                uri => {
                    setMainImage(uri);
                    model.image = uri;
                },
                'base64',
                200,
                200,
            );

        }
    }
    let formValid = false;
    const tempModel = {
        ...model,
        [name]: value,
    };
    console.log("model", tempModel)
    if (!validate.show) {
        let istemvavlid = true;
        Object.values(tempModel).map((el, index) => {
            if (
                el.length === 0 &&
                Object.keys(tempModel)[index] !== [name]
            ) {
                istemvavlid = false;
                return;
            }
        });
        if (istemvavlid) {
            formValid = true;
        }
    }
    const errorMsg = {
        ...errorMsgModel,
        [name]: validate,
    }


    setModel(tempModel);
    setErrorMsg(errorMsg);
    setFormValid(formValid);
}

export default handleInputChanger;