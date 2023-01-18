import { useContext } from 'react';
import { ShopContext } from '../context';

function Item(props) {
  let { addItemToCart } = useContext(ShopContext);

  let { mainId, displayName, displayDescription, displayAssets, price } = props;

  return (
    <div className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={displayAssets[0].full_background}
          alt={displayName}
        />
      </div>
      <div className="card-content">
        <span
          style={{ fontSize: '15px', lineHeight: 'normal' }}
          className="card-title activator grey-text text-darken-4"
        >
          {displayName}
        </span>
        <div>
          <p style={{ fontSize: '10px', lineHeight: '1.1' }}>
            {displayDescription}
          </p>
          <br />
          <span
            className="right"
            style={{
              position: 'absolute',
              bottom: '5px',
              right: '10px',
            }}
          >
            <button
              onClick={() =>
                addItemToCart(mainId, displayName, price.regularPrice)
              }
              style={{
                height: '30px',
                marginRight: '10px',
                verticalAlign: 'middle',
                backgroundColor: '#853CCA',
              }}
              className="waves-effect waves-light btn-small"
            >
              Add
            </button>
            Price: {price.regularPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Item;
