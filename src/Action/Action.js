import { store } from "../Reducer/Reducer";
import {
  Resignup,
  Willmount,
  AddCollection,
  AddCollectionData,
  AddDetails,
  DeleteDetails
} from "../Types/Types";

const { dispatch } = store;

export const resignup = e => {
  return dispatch({ type: Resignup, payload: e });
};

export const willmount = e => {
  return dispatch({ type: Willmount, payload: e });
};

export const Addcollection = e => {
  return dispatch({ type: AddCollection, payload: e });
};

export const Addcollection_data = (data, index) => {
  return dispatch({
    type: AddCollectionData,
    payload: { data: data, index: index }
  });
};

export const Adddetails = (data, classindex, nameindex) => {
  return dispatch({
    type: AddDetails,
    payload: { data: data, classindex: classindex, nameindex: nameindex }
  });
};

export const Deletedetails = (data, classindex, nameindex) => {
  return dispatch({
    type: DeleteDetails,
    payload: { data: data, classindex: classindex, nameindex: nameindex }
  });
};
