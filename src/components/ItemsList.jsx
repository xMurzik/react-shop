import Item from './Item';
import { useContext } from 'react';
import { ShopContext } from '../context';

function ItemsList() {
  let { items } = useContext(ShopContext);

  if (!items.length) {
    return <h1>Not found</h1>;
  }
  return (
    <div className="items">
      {items.map((elem) => {
        return <Item key={elem.mainId} {...elem} />;
      })}
    </div>
  );
}
export default ItemsList;
