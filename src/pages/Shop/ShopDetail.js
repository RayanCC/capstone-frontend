import { useEffect, useState } from "react";
// import PlushDetail from "../../components/PlushDetail/PlushDetail";
import { useParams } from "react-router-dom";
import PlushDetail from "../../components/PlushDetail/PlushDetail";
import { BASE_URL } from '../../api/Constants';

const ShopDetail = () => {
  const { category } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    const fetchCategoryItems = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/shop/category/${category}`
        );
        if (response.ok) {
          const data = await response.json();
          setCategoryItems(data);
        } else {
          console.error("Failed to fetch category items");
        }
      } catch (error) {
        console.error("Error fetching category items:", error);
      }
    };

    fetchCategoryItems();
  }, [category]);

  return (
    <div>
      <h2 className="detailHeader" style={{ color: category }}>
        {category}:Series
      </h2>
      <h3 className="detailMaterial">
        Material: Surface polyester fabric, pure cotton filling, cotton thread
        sewn facial features, resin adhesive bonding.
      </h3>
      <main>
        <div>
          {categoryItems &&
            categoryItems.map((item) => (
              <PlushDetail key={item._id} item={item} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default ShopDetail;
