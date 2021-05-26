import './startScreen.css';
import { Carousel } from '3d-react-carousal';

const StartScreen = () => {

    let slides = [
        <div className="movie-slide-div">
            <img src="img/black_panther.png" alt="title" />
            <p className="movie-slide-title">Black Panther</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
        <div className="movie-slide-div">
            <img src="img/the_lego_movie.png" alt="title" />,
            <p className="movie-slide-title">The lego movie</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
        <div className="movie-slide-div">
            <img src="img/black_panther.png" alt="title" />
            <p className="movie-slide-title">Black Panther</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
        <div className="movie-slide-div">
            <img src="img/the_lego_movie.png" alt="title" />,
            <p className="movie-slide-title">The lego movie</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
        <div className="movie-slide-div">
            <img src="img/black_panther.png" alt="title" />
            <p className="movie-slide-title">Black Panther</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
        <div className="movie-slide-div">
            <img src="img/the_lego_movie.png" alt="title" />,
            <p className="movie-slide-title">The lego movie</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
    ];

    let allMovies = [


    ];


    return (
        <div className="startscreen-wrap">

            <section id="movie-slider">
                <h2 className="title-new-movies">Nya filmer</h2>
                <Carousel slides={slides} autoplay={false} interval={5000} />
            </section>
            <section id="popular-movies">
                <h3 className="title-popular-movies">Populära filmer</h3>
                <div className="grids-popular-movies">
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StartScreen;