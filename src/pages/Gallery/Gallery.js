import { useEffect, useState } from "react";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import { BASE_URL } from '../../api/Constants';
import "./gallery.scss";

const Gallery = () => {
  const [gallery, setGallery] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`${BASE_URL}/gallery`);
      const json = await response.json();
      if (response.ok) {
        const sortedGallery = json.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setGallery(sortedGallery);
      }
    };
    fetchItem();
  }, []);

  return (
    <div>
      <h1 className="galleryTitle">Gallery</h1>
      <div>
        {gallery &&
          gallery.map((item) => <GalleryItem key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default Gallery;
