
export const validatorTypes = {
    POSITIVENUMBER: "POSITIVENUMBER",
    EQUAL: "EQUAL",
    PASSWORD: "PASSWORD",
    EMAIL: "EMAIL",
    NONE: "NONE",
}
export const validation = (input, type, datas = []) => {
    const validatorItem = {
        show: false,
        message: ""
    }

    console.log("type" + input.length === 0 && type !== validatorTypes.NONE)
    if (input.length === 0 && type !== validatorTypes.NONE) {
        validatorItem.show = true;
        validatorItem.message = "Хоосон утга";
    }
    if (!validatorItem.show) {
        if (type === validatorTypes.POSITIVENUMBER) {
            if (input < 0) {
                validatorItem.show = true;
                validatorItem.message = "Эерэг тоо оруулна уу"
            }
        }
        if (type === validatorTypes.EQUAL) {
            if (datas.filter((e) => e.id === input).length > 0) {
                validatorItem.show = true;
                validatorItem.message = 'Дугаар давтагдаж байна'
            }
        }
        if (type === validatorTypes.PASSWORD) {
            if (input.length < 6) {
                validatorItem.show = true;
                validatorItem.message = "6-с дээш урттай оруулна уу"
            }
        }
        if (type ===validatorTypes.EMAIL) {
            let lastAtPos = input.lastIndexOf('@');
            let lastDotPos = input.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && input.indexOf('@@') === -1 && lastDotPos > 2 && (input.length - lastDotPos) > 2)) {
                validatorItem.show = true;
                validatorItem.message = "email хаяг шаардлага хангахгүй байна"
            }
        }
    }
    return validatorItem
}