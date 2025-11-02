import MovieList from "./components/Cinema/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { useContext } from 'react'
import { ThemeContext } from "./context";


export default function Page() {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div div className={`h-full w-full ${darkMode ? 'dark' : ''}`}>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
                    <SideBar />
                    <MovieList />
                </div>
            </main>
            <Footer />
        </div>
    );
}
