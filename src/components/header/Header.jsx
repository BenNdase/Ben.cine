

const Header = (props) => {
  return (
    <div className={props.className}>
      <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={props.firstImage} alt="" />
          </div>
          <div className="carousel-item">
            <img src={props.secondImage} alt="Chicago" />
          </div>
          <div className="carousel-item">
            <img src={props.thirdImage} alt="Chicago" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
