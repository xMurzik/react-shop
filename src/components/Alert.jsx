import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

function Alert(props) {
  let { alertName, closeAlert } = useContext(ShopContext);

  useEffect(() => {
    let timer = setTimeout(closeAlert, 2000);

    return () => {
      clearTimeout(timer);
    };
    //eslint-disable-next-line
  }, [alertName]);
  return (
    <div id="toast-container">
      <div className="toast">{alertName} added to cart</div>
    </div>
  );
}

export default Alert;
