import "./galleryItem.scss";

const GalleryItem = ({item}) => {
    return(
        <div className="galleryContainer">
            <img className="galleryItem" src={item.img} alt={item.name} />
        </div>
    )
}

export default GalleryItem