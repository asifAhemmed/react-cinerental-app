import { useState } from "react";
import { getImgUrl } from "../../utils/cine-utility";
import Rating from "../Rating";
import Modal from "../Modal";
import { CartContext } from "../../context/index";
import { useContext } from "react";
import { toast } from "react-toastify";


const MovieCard = ({ movie }) => {
    const { cartItems, setCarItems } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMovie(null);
    };
    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    };
    const handleAddToCart = (e,movie) => {
        e.stopPropagation();
        const found = cartItems.find((item) => item.id === movie.id);
        if (found) {
            toast.error("Movie already in cart");
        } else {
            setCarItems([...cartItems, movie]);
            toast.success("Movie added to cart");
        }
    };
    return (
        <>
            {
                showModal && (
                    <Modal movie={selectedMovie} onClose={handleCloseModal} onAddToCart={handleAddToCart} />
                )
            }
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={() => handleSelectMovie(movie)}>
                    <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt={movie.title} />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating} />
                        </div>
                        <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            href="#">
                            <img src="./assets/shopping-bag.svg" alt="" />
                            <span onClick={(e)=>handleAddToCart(e,movie)}>${movie.price} | Add to Cart</span>
                        </a>
                    </figcaption>
                </a>
            </figure>
        </>
    );
};

export default MovieCard;