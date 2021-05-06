import Navbar from "../navbar/Navbar";

const Header = (props) => {
  return (
    <div>
      <div id="carousel_1" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#carousel_1" data-slide-to="0" class="active"></li>
          <li data-target="#carousel_1" data-slide-to="1"></li>
          <li data-target="#carousel_1" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={props.firstSrc} alt="" />
          </div>
          <div className="carousel-item">
            <img src={props.secondSrc} alt="Chicago" />
          </div>
          <div className="carousel-item">
            <img src={props.thirdSrc} alt="Chicago" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel_1"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel_1"
          data-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
      <div className="header-container">
        <Navbar />
        <div className="title-container">
          <h1 className="title">Obtenez les meilleurs films ici</h1>
          <p className="description">
            Ben.ciné est une maison de production de haute qualité
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
