import React from "react";
import { useParams } from "react-router";
import MenuItemPageHero from "../components/MenuItemPage/MenuItemPageHero";

const SingleMenuItemPage = () => {
  const { menuItemId } = useParams();
  console.log(menuItemId);
  return (
    <div>
      <MenuItemPageHero />
    </div>
  );
};

export default SingleMenuItemPage;
