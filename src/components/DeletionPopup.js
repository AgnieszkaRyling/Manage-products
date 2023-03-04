import "./DeletionPopup.css";

const DeletionPopup = ({ setIsOpenDeletionPopup, removeProduct }) => {
  return (
    <div className="deletion-backdrop">
      <div className="popup-box">
        <div className="text-box">
          <p>Czy na pewno chcesz usunąć ten produkt?</p>
          <p>Powyższej czynności nie można cofnąć.</p>
        </div>
        <div className="buttons-box">
          <button
            className="cancel-btn"
            onClick={() => setIsOpenDeletionPopup(false)}
          >
            Nie
          </button>
          <button
            className="remove-btn"
            onClick={() => {
              setIsOpenDeletionPopup(false);
              removeProduct();
            }}
          >
            Tak
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletionPopup;
