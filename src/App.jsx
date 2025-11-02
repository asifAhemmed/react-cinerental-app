import { ToastContainer } from "react-toastify";
import Page from "./Page";
import { CartContext } from "./context";
import { useState } from 'react';

const App = () => {
  const [cartItems,setCarItems] = useState([]);
  return (
    < >
      <CartContext.Provider value={{cartItems,setCarItems}}>
        <Page />
        <ToastContainer />
      </CartContext.Provider>
    </>
  );
};

export default App;