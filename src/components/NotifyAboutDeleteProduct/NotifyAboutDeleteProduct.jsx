const NotifyAboutDeleteProduct = ({ onCloseModal, notifyOptions }) => {
  const { title, deleteProduct, deletingInfo } = notifyOptions;

  const handleOnDeleteClick = () => {
    deleteProduct(deletingInfo);
    onCloseModal(false);
  };

  return (
    <div>
      <div>
        Ви впевнені, що хочете видалити <strong>{title}</strong>?
      </div>
      <div>
        <button type="button" onClick={handleOnDeleteClick}>
          Так, хочу!
        </button>
        <button type="button" onClick={() => onCloseModal(false)}>
          Ні, я передумала!
        </button>
      </div>
    </div>
  );
};

export default NotifyAboutDeleteProduct;
