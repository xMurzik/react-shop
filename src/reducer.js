export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_ITEMS': {
      return {
        ...state,
        items: payload || [],
        loading: false,
      };
    }
    case 'ADD_ITEM_TO_CART': {
      let flag = false;

      let newOrder = state.orders.map((elem) => {
        if (elem.mainId === payload.mainId) {
          flag = true;
          return {
            ...elem,
            quantity: elem.quantity + 1,
          };
        }
        return elem;
      });

      if (flag) {
        return {
          ...state,
          orders: newOrder,
          alertName: payload.displayName,
        };
      }

      if (!flag) {
        return {
          ...state,
          orders: [
            ...state.orders,
            {
              displayName: payload.displayName,
              mainId: payload.mainId,
              regularPrice: payload.regularPrice,
              quantity: 1,
            },
          ],
          alertName: payload.displayName,
        };
      }
      break;
    }
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    case 'HANDLE_BASKET_SHOW':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        orders: state.orders.filter((elem) => {
          if (elem.mainId === payload.mainId) {
            if (elem.quantity === 1) {
              return false;
            } else {
              elem.quantity = elem.quantity - 1;
            }
          }
          return true;
        }),
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        orders: state.orders.map((elem) => {
          if (elem.mainId === payload.mainId) {
            elem.quantity = elem.quantity + 1;
          }
          return elem;
        }),
      };
    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        orders: state.orders.filter((elem) => elem.mainId !== payload.mainId),
      };
    default:
      return state;
  }
}
