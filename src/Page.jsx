import MovieList from "./components/Cinema/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";


export default function Page() {
    return (
        <div className={`h-full w-full`}>
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
