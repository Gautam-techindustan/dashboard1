import { createStore } from "redux";
import {
  Resignup,
  Willmount,
  AddCollectionData,
  AddDetails,
  DeleteDetails,
  AddCollection
} from "../Types/Types";

export let initialstate = {
  storage: [],
  collections: [
    {
      title: "Marketing",
      toggle: true,
      data: [
        {
          title: "deep",
          toggle: true,
          details: {
            age: "21",
            details: "how are you",
            image: "",
            name: "Aman",
            phoneno: "321321321",
            toggle: true
          }
        }
      ]
    }
  ]
};

export let login = (state = initialstate, action) => {
  let { storage } = state;
  let { collections } = state;
  switch (action.type) {
    case Resignup:
      storage = [...storage, action.payload];

      localStorage.setItem("data", JSON.stringify(storage));
      return { ...state, storage };

    case Willmount:
      if (action.payload === null) {
        alert("null data ");
      } else {
        storage = action.payload;
        return { ...state, storage };
      }

    case AddCollection:
      collections = [...collections, action.payload];
      return { ...state, collections };

    case AddCollectionData:
      collections[action.payload.index].data = [
        ...collections[action.payload.index].data,
        action.payload.data
      ];
      return { ...state, collections };

    case AddDetails:
      collections[action.payload.classindex].data[
        action.payload.nameindex
      ][0].details = action.payload.data;
      return { ...state, collections };

    case DeleteDetails:
      collections[action.payload.classindex].data[
        action.payload.nameindex
      ][0].details = action.payload.data;
      return { ...state, collections };

    default:
      return state;
  }
};

export const store = createStore(login);

store.subscribe(() => {
  console.log("current state", store.getState());
});
