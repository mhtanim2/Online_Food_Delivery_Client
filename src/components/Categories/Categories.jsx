import React, { useEffect } from "react";
import { menuItemsWithCategory } from "../../APIRequest/APIRequest";
import { isEmpty } from "../../helper/formValidation";
import { errorToast } from "../../utils/TostMessage";
import axiosInstance from "../../utils/axiosInstance";
const Categories = () => {
  const [categoryList, setCategoryList] = React.useState([]);

  useEffect(() => {
    axiosInstance
      .get("/categoryWiseNumOfMenuItem")
      .then((res) => {
        setCategoryList(res.data["data"]);
      })
      .catch((err) => {
        errorToast("Something went wrong");
      });
  }, []);

  const handleItemClick = async (item) => {
    isEmpty(item) ? menuItemsWithCategory("0") : menuItemsWithCategory(item);
  };
  return (
    <div className="row categories">
      {categoryList?.map((item, i) => (
        <div
          className="category-item col-md-6"
          key={item._id}
          onClick={() => {
            handleItemClick(item.ItemCategory);
          }}
        >
          <img src="images/logo.png" alt="" />
          <p>{item.ItemCategory}</p>
          <h3>{item.numberOfMenuItems}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
