import { FaShoppingBag } from "react-icons/fa";
const MenuItem = ({ item, handleNavigate }) => {
  console.log(item);
  return (
    <div
      class="card card-item"
      style={{ width: "100%" }}
      onClick={() => handleNavigate(`/home/${item._id}`)}
    >
      <div className="card-top">
        <p className="discount-box">{item.Discount} OFF</p>
        <div className="card-item-img">
          <div>
            <img className="" src={item.ItemImage} alt="" />
          </div>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">{item.ItemName}</h5>
        <p class="cosine">category</p>
        <div className="card-bottom d-flex justify-content-between">
          <p className="price">
            <span className="actual-price me-2">{item.UnitPrice}</span>
            {item.Discount}
          </p>
          <FaShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
