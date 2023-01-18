import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

let initialState = {
  items: [],
  loading: true,
  orders: [],
  isBasketShow: false,
  alertName: '',
};

export function ContextProvider(props) {
  let [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.removeItemFromCart = (mainId) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: { mainId: mainId } });
  };

  value.increasequantity = function (mainId) {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { mainId: mainId } });
  };

  value.decreasequntity = function (mainId) {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { mainId: mainId } });
  };

  value.handleBasketShow = function () {
    dispatch({ type: 'HANDLE_BASKET_SHOW' });
  };

  value.closeAlert = function () {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.addItemToCart = function (mainId, displayName, regularPrice) {
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        mainId: mainId,
        displayName: displayName,
        regularPrice: regularPrice,
      },
    });
  };

  value.setItems = function (data) {
    dispatch({ type: 'SET_ITEMS', payload: data });
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
}
