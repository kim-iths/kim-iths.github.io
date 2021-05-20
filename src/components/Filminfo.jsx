
const Filminfo = () => {
    

    return(
        <section>
            <div className="movie-header">
                <span className="movie-name">Film 2: Den Andra Filmen</span>
            </div>
            <div className="movie-info-content">
                <div className="synopsis-div">
                    <p>Synopsis</p>
                    <p className="movie-synopsis">Synopsis för filmen som antingen kan vara kort eller lång, kanske med en “visa mer”-knapp vid slutet ifall den långa inte får pla-</p>
                </div>
                <div className="actors-div">
                    <p>Actors</p>
                    <p className="movie-actors">Kim Hellman, David Sävenmark, Emmeline Mutka, Minja Cheng, Wenjing Zhang</p>
                </div>
                <div className="genres-div">
                    <p>Genres</p>
                    <p className="movie-genres">Action, Sci-Fi, Äventyr</p>
                </div>
            </div>
        </section>
    )
}

export default Filminfo;