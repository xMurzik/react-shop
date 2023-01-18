import React from 'react';
import BasketItem from './BasketItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketList(props) {
  let { orders, handleBasketShow } = useContext(ShopContext);

  let sum = orders.reduce((acc, elem) => {
    return (acc += elem.regularPrice * elem.quantity);
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active deep-purple">Cart</li>
      {orders.length ? (
        orders.map((elem) => {
          return <BasketItem key={elem.mainId} {...elem} />;
        })
      ) : (
        <li className="collection-item">Cart is empty</li>
      )}

      <li className="collection-item active deep-purple">Price: {sum}</li>

      <li className="collection-item" style={{ height: '50px' }}>
        <button className="deep-purple btn-small right">Buy</button>
      </li>

      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BasketList;
