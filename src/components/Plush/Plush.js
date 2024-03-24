import { Link } from 'react-router-dom';
import "./plush.scss";


const Plush = ({item}) => {
      return (
        <div className='itemContainer'> 
            <h4 className='itemTitle'>{item.title}</h4>
            <Link to={`/shop/${item._id}/${item.category}`}><img className='itemImg' src={item.thumb} alt={item.tilte} />
            </Link>
        </div>
      )
}

export default Plush