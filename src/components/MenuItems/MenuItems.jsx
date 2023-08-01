import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import { menuItemsWithCategory } from "../../APIRequest/APIRequest";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  let [searchKeyword, setSearchKeyword] = useState("0");

  
  const { menuItemList } = useSelector((state) => state.menuItem);
  
  useEffect(() => {
    menuItemsWithCategory(searchKeyword);
  }, []);

  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 0,
          // dots: true
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 0,
          // dots: true
        },
      },
      {
        breakpoint: 1075,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          // dots: true
        },
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
    ],
  };

  const handleNavigate = (loc) => {
    navigate(loc);
  };

  let content = "";
  if (menuItemList.length > 0) {
    content = menuItemList?.map((item) => (
      <div className="container-lg py-5">
        <div className="category-name d-flex align-items-center gap-3 mb-4">
          <img src="images/star.png" alt="" />
          <h3>{item.ItemCategory}</h3>
        </div>
        <div className="menu-item-container position-relative">
          <div className="slide-overlay"></div>
          <Slider {...settings}>
            {item?.Items?.map((menuItem) => (
              <MenuItem
                key={menuItem._id}
                item={menuItem}
                handleNavigate={handleNavigate}
              />
            ))}
          </Slider>
        </div>
      </div>
    ));
  } else {
    content = <div className="text-center py-5">No Data Found</div>;
  }
  return <>{content}</>;
};

export default MenuItems;
