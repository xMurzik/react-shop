import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import ItemsList from './ItemsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';
import { ShopContext } from '../context';

function MainShop() {
  let { setItems, loading, orders, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data.shop);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className="container contens">
      <Cart quantity={orders.length} />
      {loading ? <Preloader /> : <ItemsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export default MainShop;
