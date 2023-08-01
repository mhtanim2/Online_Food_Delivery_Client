import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import "../App.css";
import { getLocation } from "../helper/SessionHelper";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import Categories from "./Categories/Categories";
import Login from "./Login";
import RegisterModal from "./RegisterModal";

const Menu = () => {
  const { user, token } = useAuthContext();
  const { logout } = useLogout();

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  useEffect(() => {
    if (user && token) {
      setOpenLoginModal(false);
      setOpenRegisterModal(false);
    }
  }, [user, token]);

  const handleLoginModal = (event) => {
    event.preventDefault();
    setOpenLoginModal(true);
  };

  const handleRegisterModal = (event) => {
    event.preventDefault();
    setOpenRegisterModal(true);
  };

  return (
    <>
      <div className="container-lg header">
        <div className="row py-2 align-items-center">
          <div className="col-md-8">
            <div className="header-content d-flex align-items-center lg:gap-3">
              <div className="logo">
                <img src="/images/logo.png" alt="logo" />
              </div>
              <div className="location d-flex ">
                {getLocation() ? (
                  <p>{`${getLocation().suburb} ${getLocation().city}-${
                    getLocation().postcode
                  }`}</p>
                ) : (
                  <p>Select Your Location.</p>
                )}
                <FaAngleDown />
              </div>
              <div className="main-menu">
                <ul className="d-flex lg:gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="categorie-link">
                    <a href="#">
                      Category <FaAngleDown />
                    </a>
                    <Categories />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {!user && !token ? (
              <div className="signin-area">
                <button className="btn me-3" onClick={handleLoginModal}>
                  Sign In
                </button>

                <button className="btn" onClick={handleRegisterModal}>
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="signin-area">
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {openLoginModal && <Login closeModal={setOpenLoginModal} />}

      {openRegisterModal && <RegisterModal closeModal={setOpenRegisterModal} />}
    </>
  );
};

export default Menu;
