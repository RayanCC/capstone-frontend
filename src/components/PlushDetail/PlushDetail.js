import "./plushDetail.scss";

const PlushDetail = ({item}) => {
    return (
        <div className="itemContainer">
            <h4 className="itemTitle">{item.title}</h4>
            <h5 className="itemName">{item.name}</h5>
            <img className="itemImg" src={item.img} alt={item.title}/>
            <p className="itemSize">{item.size}</p>
            <p className="itemPrice">{item.price}</p>
        </div>
    )
}

export default  PlushDetail;