import { setMenuItemList } from "../redux/state-slice/menuItemSlice";
import store from "../redux/store/store";
import { errorToast, successToast } from "../utils/TostMessage";
import axiosInstance from "../utils/axiosInstance";

export const registration = (data) => {
  return axiosInstance
    .post("/registration", data)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        successToast(res.data.message);
        return true;
      } else {
        errorToast("Something went wrong! Try again.");
      }
    })
    .catch((err) => {
      console.log(err);
      errorToast("Something went wrong! Try again.");
    });
};

export const menuItemsWithCategory = (searchKeyword) => {
  console.log("menuItemsWithCategory")
  axiosInstance
    .get("/categoryWiseItems/" + searchKeyword)
    .then((res) => {
      console.log(res);
      if (res.status === 200 && res.data["data"].length > 0) {
        store.dispatch(setMenuItemList(res.data["data"]));
      } else {
        store.dispatch(setMenuItemList([]));
      }
    })
    .catch((err) => {
      store.dispatch(setMenuItemList([]));
      errorToast("Something went wrong! Try again.");
    });
};
