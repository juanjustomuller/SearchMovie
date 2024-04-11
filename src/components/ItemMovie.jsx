import { Link } from 'react-router-dom'
import DefaultImage from '/NoImage.png'

const ItemMovie = ({ id, title, type, year, poster}) => {

    let image = poster === 'N/A' ? DefaultImage : poster

  return ( 
    <Link to={`/movies/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
    <article className="item-movie" style={{backgroundImage: `url(${image})`}}>
        <div className="info">
            <h4>{title}</h4>
            <p className="row-info">
                <span>{type}</span>
                <span>{year}</span>
            </p>
        </div>
    </article>
    </Link>
  )
}

export default ItemMovie