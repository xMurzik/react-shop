import { useContext } from 'react';
import { ShopContext } from '../context';
function Cart(props) {
  let { handleBasketShow } = useContext(ShopContext);
  let { quantity } = props;
  return (
    <div className="cart deep-purple" onClick={handleBasketShow}>
      <i className="material-icons">shopping_basket</i>
      {quantity ? (
        <span
          style={{ paddingLeft: '4px', position: 'relative', top: '-3px' }}
          className="cart-quantity"
        >
          {quantity}
        </span>
      ) : null}
    </div>
  );
}
export default Cart;
