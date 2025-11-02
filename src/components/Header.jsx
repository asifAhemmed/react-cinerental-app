import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Sun from "../assets/icons/sun.svg";
import Moon from "../assets/icons/moon.svg";
import CartImage from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import Cart from "./Cart";
import { ThemeContext } from "../context";

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <header>
            {
                showCart && (
                    <Cart onClose={() => setShowCart(false)} />
                )
            }
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={Logo} width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={Ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a
                            className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                            onClick={() => setDarkMode(darkMode => !darkMode)}
                        >
                            <img src={darkMode ? Sun : Moon} width="24" height="24" alt="theme-icon" />
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setShowCart(true)} className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={CartImage} width="24" height="24" alt="" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;