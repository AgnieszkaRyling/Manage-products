import { useEffect, useState } from "react";
import { generateUUID } from "../utils/generateUUID";
import "./ProductsPopup.css";

const ProductsPopup = ({
  setIsOpenPopup,
  addProduct,
  productToEdit,
  editProduct,
}) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (productToEdit) {
      console.log("productToEdit: ", productToEdit);
      setProductName(productToEdit.title);
      setProductPrice(productToEdit.price);
      setSelectedOption(productToEdit.category);
    }
  }, [productToEdit]);

  const handleAddButton = () => {
    const newProduct = {
      uuid: generateUUID(),
      title: productName,
      price: productPrice,
      category: selectedOption,
    };

    addProduct(newProduct);
    setIsOpenPopup(false);
  };

  const handleEditButton = () => {
    const editedProduct = {
      uuid: productToEdit.uuid,
      title: productName,
      price: productPrice,
      category: selectedOption,
    };
    editProduct(editedProduct);
    setIsOpenPopup(false);
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <h2>{productToEdit ? "Edytuj" : "Dodaj"} produkt</h2>
        <input
          type="text"
          placeholder="nazwa produktu"
          className="input-popup"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="cena"
          className="input-popup"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <select
          className="select-popup"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">Wybierz kategorię</option>
          <option value="pizza">Pizza</option>
          <option value="pasta">Makaron</option>
        </select>
        <div className="buttons-box">
          <button
            onClick={() => {
              setIsOpenPopup(false);
            }}
            className="btn-popup-close"
          >
            Anuluj
          </button>
          {productToEdit ? (
            <button
              onClick={() => handleEditButton()}
              className="btn-popup-save"
            >
              Edytuj
            </button>
          ) : (
            <button
              onClick={() => handleAddButton()}
              className="btn-popup-save"
            >
              Dodaj
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPopup;
