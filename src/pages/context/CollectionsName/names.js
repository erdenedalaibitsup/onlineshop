import firebase from '../../../firebase'

export const productSubTypeCon = firebase.firestore().collection('productSubType');
export const productTypeCon = firebase.firestore().collection('productType');
export const productCon = firebase.firestore().collection('product');
export const productStorage = firebase.storage();