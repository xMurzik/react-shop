import React, { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
  let { removeItemFromCart, increasequantity, decreasequntity } =
    useContext(ShopContext);

  let { mainId, displayName, regularPrice, quantity } = props;

  return (
    <li className="collection-item">
      {displayName}{' '}
      <i
        onClick={() => decreasequntity(mainId)}
        style={{ color: '#853CCA', cursor: 'pointer', verticalAlign: 'middle' }}
        className="material-icons"
      >
        chevron_left
      </i>
      x:{quantity}
      <i
        onClick={() => increasequantity(mainId)}
        style={{ color: '#853CCA', cursor: 'pointer', verticalAlign: 'middle' }}
        className="material-icons"
      >
        chevron_right
      </i>{' '}
      = {regularPrice * quantity}
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          style={{ color: '#853CCA', cursor: 'pointer' }}
          onClick={() => removeItemFromCart(mainId)}
        >
          close
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
