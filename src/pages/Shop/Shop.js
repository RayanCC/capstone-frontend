import { useEffect, useState } from "react";
import './shop.scss';
import Plush from "../../components/Plush/Plush";
import { BASE_URL } from '../../api/Constants';

const Shop = () => {
  const [shop, setShop] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`${BASE_URL}/shop`);
      const json = await response.json();

      if (response.ok) {
        const filteredItems = json.filter(item => item.thumb);
        setShop(filteredItems);
      }
    };

    fetchItem();
  }, []);

  return (
    <div>
      <header className="shopheader">Plushies Category</header>
      <main>
        <div className="shopContainer">
          {shop && shop.map((item) => <Plush key={item._id} item={item} />)}
        </div>
      </main>
    </div>
  );
};

export default Shop;
