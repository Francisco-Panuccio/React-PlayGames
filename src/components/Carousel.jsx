import Banner1 from "../../public/imagenes/god_banner.webp"
import Banner2 from "../../public/imagenes/pokemon_banner.webp"
import Banner3 from "../../public/imagenes/call_banner.webp"
import Banner4 from "../../public/imagenes/mario_banner.avif"
import Banner5 from "../../public/imagenes/spiderman_banner.webp"

const Carousel = () => {
    return(
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={Banner1} className="banner" alt="Banner God of War"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={Banner2} className="banner" alt="Banner Pokémon"/>
                    </div>
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={Banner3} className="banner" alt="Banner Call of Duty"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={Banner4} className="banner" alt="Banner Mario Kart"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={Banner5} className="banner" alt="Banner Spider-Man"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
};

export default Carousel;