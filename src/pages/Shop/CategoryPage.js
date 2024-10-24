import { useParams } from "react-router-dom";
import { products } from "../../util/Constant";
import "../Shop/categorypage.scss";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams(); // Get the category from URL
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  // Repeat logic for the "green" category
  const repeatProductCount = 10; // Number of times to repeat
  const extendedProducts = filteredProducts.flatMap((product) =>
    Array(repeatProductCount).fill(product)
  );

  return (
    <div>
      <header className="category-header">
        {category.toUpperCase()} Plushies
      </header>
      <div className="category-container">
        {extendedProducts.map((product, index) => (
          <div className="product-item" key={`${product.id}-${index}`}>
            <Link to={`/item/${product.id}`}>
              <img
                src={product.src}
                alt={product.alt}
                className="product-img"
              />
              <div className="product-info">
                <h2 className="product-name">{product.text}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
