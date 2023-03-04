import { useState, useEffect } from "react";

const ProductsFilters = ({ products, setFilteredList }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputIngredients, setInputIngredients] = useState("");

  useEffect(() => {
    const filterProducts = () => {
      let result = products;

      if (inputTitle) {
        result = result.filter((product) =>
          product.title.toLowerCase().includes(inputTitle.toLowerCase())
        );
      }

      if (inputIngredients) {
        result = result.filter((product) =>
          product.ingredients.includes(inputIngredients)
        );
      }

      setFilteredList(result);
    };
    filterProducts();
  }, [inputTitle, inputIngredients]);

  return (
    <div className="filters-container">
      <input
        placeholder="Szukaj produktu po nazwie"
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <input
        placeholder="Szukaj produktu po składniku"
        onChange={(e) => setInputIngredients(e.target.value)}
      />
    </div>
  );
};

export default ProductsFilters;
