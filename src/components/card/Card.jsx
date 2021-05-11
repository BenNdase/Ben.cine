import { Link } from "react-router-dom";
import "./Card.scss";
const CardMovies = (props) => {
    return(
        <div className={props.className} key={props.key} >
            <div className="card">
              <Link to={`/film/${props.id}`} className="card-link">
                  <div className="image-container">
                    <img src={props.poster} alt={props.title} className="card-image img-fluid" />
                  </div>
                  <p className="card-title">{props.title}</p>
                  <p className="card-description">{props.text} {props.rating}</p>
              </Link>
            </div>
        </div>
    )
}
export default CardMovies;