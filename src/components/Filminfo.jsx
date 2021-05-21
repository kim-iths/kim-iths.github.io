import './filmInfo.css'

const Filminfo = () => {
    

    return(
        <section>
            <div className="movie-banner">
                <img className="banner-image" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/5bd88a57235929.59d46e946a25b.jpg" alt="movie" />
                <span className="movie-name">Film 2: Den Andra Filmen</span>
                <span className="movie-year-time">2017 / 2h 41m</span>
            </div>
            <div className="movie-info-content">
                <div className="synopsis-div column">
                    <p className="bold">Handling</p>
                    <p className="movie-synopsis">Synopsis för filmen som antingen kan vara kort eller lång, kanske med en “visa mer”-knapp vid slutet ifall den långa inte får pla...</p>
                    <span className="show-full-synopsis"><a href="">Visa mer</a></span>
                </div>
                <div className="actors-div column">
                    <p className="bold">Actors</p>
                    <p className="movie-actors">Kim Hellman, David Sävenmark, Emmeline Mutka, Minja Cheng, Wenjing Zhang</p>
                </div>
                <div className="genres-div column">
                    <p className="bold">Genres</p>
                    <p className="movie-genres">Action, Sci-Fi, Äventyr</p>
                </div>
            </div>
            <div className="buy">
                <span>199kr</span>
                <button className="buy-button">Köp</button>
            </div>
            <div className="related-movies">
                <p>Liknande filmer</p>
                <div className="movie-row">
                    <div className="related-movie"></div>
                    <div className="related-movie"></div>
                    <div className="related-movie"></div>
                    <div className="related-movie"></div>
                    <div className="related-movie"></div>
                </div>


            </div>
        </section>
    )
}

export default Filminfo;