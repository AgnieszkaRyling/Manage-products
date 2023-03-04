import { useEffect, useState } from "react";
import { productsList } from "./data/products.js";
import ProductsTable from "./components/ProductsTable";
import ProductsPopup from "./components/ProductsPopup";
import DeletionPopup from "./components/DeletionPopup.js";
import ProductsFilters from "./components/ProductsFilters.js";
import "./App.css";

const App = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isOpenDeletionPopup, setIsOpenDeletionPopup] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [products, setProducts] = useState(productsList);
  const [productToEdit, setProductToEdit] = useState(null);
  const [filteredList, setFilteredList] = useState(products);

  useEffect(() => {
    setFilteredList(products);
  }, [products]);

  const addProduct = (newProduct) =>
    setProducts((prev) => [...prev, newProduct]);

  const removeProduct = () => {
    const result = products.filter(
      (product) => product.uuid !== productToDelete
    );
    setProducts(result);
  };

  const editProduct = (editedProduct) => {
    const result = products.filter(
      (product) => product.uuid !== editedProduct.uuid
    );
    console.log("result: ", result);
    const newList = [...result, editedProduct];
    setProducts(newList);
  };
  return (
    <>
      {isOpenPopup && (
        <ProductsPopup
          setIsOpenPopup={setIsOpenPopup}
          addProduct={addProduct}
          productToEdit={productToEdit}
          editProduct={editProduct}
        />
      )}
      {isOpenDeletionPopup && (
        <DeletionPopup
          products={products}
          setIsOpenDeletionPopup={setIsOpenDeletionPopup}
          removeProduct={removeProduct}
          productToDelete={productToDelete}
        />
      )}
      <div className="container">
        <h1>Twoje produkty:</h1>
        <ProductsFilters
          // filteredList={filteredList}
          setFilteredList={setFilteredList}
          products={products}
        />
        <ProductsTable
          products={filteredList}
          removeProduct={removeProduct}
          setIsOpenPopup={setIsOpenPopup}
          setProductToEdit={setProductToEdit}
          setIsOpenDeletionPopup={setIsOpenDeletionPopup}
          setProductToDelete={setProductToDelete}
        />
        <button
          onClick={() => {
            setIsOpenPopup(true);
            setProductToEdit(null);
            // setFilteredList(products);
          }}
          className="btn-add"
        >
          Nowy produkt
        </button>
      </div>
    </>
  );
};

export default App;
