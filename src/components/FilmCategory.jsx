import './filmCategory.css' 

const FilmCategory = () => {

    function categoryClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    }

        return (

        <section className="movieCategory">
            <h1>Alla filmer</h1>
            
            <div className="categoryContainer">
            <div className="grid">
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Action</h3>
            </a></div>
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Animerat</h3>
            </a></div>
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Barnfilm</h3>
            </a></div>
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Komedi</h3>
            </a></div>
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Drama</h3>
            </a></div>
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Romantik</h3>
            </a></div>
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Skräck</h3>
            </a></div>
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Fantasy</h3>
            </a></div>
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Sci-Fi</h3>
            </a></div>
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Äventyr</h3>
            </a></div>
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Thriller</h3>
            </a></div>
            <div className="col categories"><a href="#" onClick={categoryClick}>
                <h3>Dokumentär</h3>
            </a></div>
            </div>
            </div>

            <h3>Alla filmer</h3>
            <div className="suggestionContainer">
            <div className="grid">
            <div className="col suggestion"></div>
            <div className="col suggestion"></div>
            <div className="col suggestion"></div>
            <div className="col suggestion"></div>
            <div className="col suggestion"></div>
            <div className="col suggestion"></div>
            <div className="col suggestion"></div>
            <div className="col suggestion"></div>
            <div className="col suggestion"></div>
            <div className="col suggestion"></div>
            </div>
            </div>
        </section>
        )

}

export default FilmCategory;