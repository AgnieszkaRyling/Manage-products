import "./ProductsTable.css";

const ProductsTable = ({
  products,
  removeProduct,
  setIsOpenDeletionPopup,
  setIsOpenPopup,
  setProductToEdit,
  setProductToDelete,
}) => {
  return (
    <table>
      <tr>
        <th>Produkt</th>
        <th>Kategoria</th>
        <th>Cena</th>
        <th></th>
        <th></th>
      </tr>
      {products.map((product) => (
        <tr>
          <td>{product.title}</td>
          <td>{product.category}</td>
          <td>{product.price} zł</td>
          <td>
            <button
              onClick={() => {
                setProductToDelete(product.uuid);
                setIsOpenDeletionPopup(true);
                // setFilteredList(products);
              }}
              className="btn-remove"
            >
              Usuń
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                setIsOpenPopup(true);
                setProductToEdit(product);
                // setFilteredList(products);
              }}
              className="btn-edit"
            >
              Edytuj
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default ProductsTable;
