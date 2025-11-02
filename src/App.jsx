import { ToastContainer } from "react-toastify";
import Page from "./Page";
import { CartContext, ThemeContext } from "./context";
import { useState } from 'react';

const App = () => {
  const [cartItems, setCarItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  return (
    < >
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <CartContext.Provider value={{ cartItems, setCarItems }}>
          <Page />
          <ToastContainer position="bottom-right" />
        </CartContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;