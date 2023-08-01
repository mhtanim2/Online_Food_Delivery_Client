import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import LetsConnect from "../components/LetsConnect/LetsConnect";
import {
  getLocation,
  setLocation as userLocation,
} from "../helper/SessionHelper";

const Home = () => {
  const inputRef = useRef(null);
  let [location, setLocation] = useState("");

  useEffect(() => {
    if (location !== "") {
      window.location.reload();
    }
  }, [location]);

  const handleButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              setLocation(`
                ${data.address.city} ${data.address.suburb} ${data.address.country}
              `);
              userLocation({
                city: data.address?.city,
                suburb: data.address?.suburb,
                country: data.address?.country,
                postcode: data.address?.postcode,
              });
            })
            .catch(() => {
              console.log("Error fetching data from api");
            });
        },
        (error) => {
          console.log("Error getting geolocation:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="banner position-relative"
              style={{ backgroundImage: `url(./images/banner.png)` }}
            >
              <div className="banner-content">
                <h1>Online Food Delivery</h1>
                <h6>Find Restaurants Near you</h6>
                <div className="search-area mt-4">
                  <div className="d-flex">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={
                          getLocation() ? (
                            <p>{`${getLocation().suburb} ${
                              getLocation().city
                            }-${getLocation().postcode} ${
                              getLocation().country
                            }`}</p>
                          ) : (
                            "Select Your Location."
                          )
                        }
                      />
                      <button
                        className="input-group-text"
                        ref={inputRef}
                        onClick={handleButtonClick}
                      >
                        Set Location
                      </button>
                    </div>
                    <div className="px-3">or</div>
                    <div>
                      <a href="#" className="pick-btn">
                        {" "}
                        Pick from map{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="position-absolute bottom-0 end-0"
                src="./images/small-banner.png"
                alt="banner"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 position-relative">
            <div className="delivery-section">
              <img src="./images/order-online.png" alt="image" />
              <h4>Order Online</h4>
              <p>
                Order in for yourself or for the group, with no restrictions on
                order value
              </p>
            </div>
            <img
              className="position-absolute"
              src="./images/vector-3.png"
              alt="img"
            />
          </div>

          <div className="col-lg-4 position-relative">
            <div className="delivery-section">
              <img src="./images/first-delevery.png" alt="image" />
              <h4>Fast Delivery</h4>
              <p>
                Order in for yourself or for the group, with no restrictions on
                order value
              </p>
            </div>
            <img
              className="position-absolute"
              src="./images/vector-4.png"
              alt="img"
            />
          </div>

          <div className="col-lg-4">
            <div className="delivery-section">
              <img src="./images/resh-food.png" alt="image" />
              <h4>Enjoy Fresh Food</h4>
              <p>
                Order in for yourself or for the group, with no restrictions on
                order value
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5 item-section">
        <div className="row">
          <div className="col-lg-4">
            <img src="images/item_1.png" alt="img" />
          </div>
          <div className="col-lg-4">
            <img src="images/item_2.png" alt="img" />
          </div>
          <div className="col-lg-4">
            <img src="images/item_3.png" alt="img" />
          </div>
        </div>
      </div>

      <div className="container pb-5 feature-section">
        <div className="row">
          <div className="col-lg-6">
            <div className="feature-inner d-flex">
              <img src="images/feature_1.png" alt="img" />
              <div className="feature-content">
                <h4> Open your own restaurant </h4>
                <p> Register as seller and open shop to start your business</p>
              </div>
              <a href="#"> Register </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-inner d-flex">
              <img src="images/feature_2.png" alt="img" />
              <div className="feature-content">
                <h4>Become a Delivery Man</h4>
                <p> Register as delivery man and earn money </p>
              </div>
              <a href="#"> Register </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 discount-section">
        <div className="row align-center">
          <div className="col-2">
            <img src="images/discount_1.png" alt="img" />
          </div>
          <div className="col-8 text-center">
            <h2>DISCOUNT UPTO 20%</h2>
            <h4>for Chinese, Japanies & Asian foods</h4>
          </div>
          <div className="col-2">
            <img src="images/discount_2.png" alt="img" />
          </div>
        </div>
      </div>

      {/* <div className="container-fluid subscripe-area">
        <div className="row">
          <div className="col-lg-12 px-0">
            <img
              className="position-absolute bottom-0 start-0"
              src="images/barger_1.png"
              alt="img"
            />
            <div className="d-flex align-items-center">
              <div className="subscript-area_content">
                <h2> Lets Connect ! </h2>
                <p>
                  Stay Upto Date With Restaurants Arond you. <br />
                  Subscribe With Email.
                </p>
              </div>
              <div className="subscripe-form">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                  <span className="input-group-text"> </span>
                </div>
              </div>
            </div>
            <img
              className="position-absolute position-absolute top-0 end-0"
              src="images/barger_2.png"
              alt="img"
            />
          </div>
        </div>
      </div> */}
      <div className="container"></div>
      <LetsConnect />

      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-6">
            <Carousel>
              <Carousel.Item>
                <img src="images/slider.png" alt="slider" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="images/slider.png" alt="slider" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="images/slider.png" alt="slider" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-6 map-section">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.0151514219647!2d-80.76330568475547!3d35.15624288032006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854211c9029a735%3A0x7c4289faf89a4e21!2s3676%20William%20Harry%20Ct%2C%20Charlotte%2C%20NC%2028211%2C%20USA!5e0!3m2!1sen!2sbd!4v1569966274706!5m2!1sen!2sbd"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
