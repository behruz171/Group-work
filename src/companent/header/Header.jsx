import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import Katalog from "../katalog/Katalog";
import './header.css';

const Header = () => {
  const qiymat = useSelector((state) => state);
  {
    return (
      <>
        <div>
          <div>
            <div className="row row1 g-0  align-item-center">
              <div className="col-6  col1">
                <h1 className="fw-bold">Bookstore</h1>
                <h6>The World Of Books. Book is a source of knowledge</h6>
                <h6>
                  In our store you can find a book for every taste. <br /> A
                  large assortment. Pleasant prices. Interesting <br /> stories.
                </h6>
              </div>
              <div className="col-6">
                <img
                  src="https://www.linkpicture.com/q/image-1_186.png"
                  alt="rasm"
                />
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: "150px" }}
            className="d-flex justify-content-around align-items-center py-2"
          >
            <h3 className="fw-bold ">Hot arrivals</h3>
            <div className="d-flex">
              <h6 className="px-4 hover1 hots">Fantastic</h6>
              <h6 className="px-4 hover1 hots">Self-development</h6>
              <h6 className="px-4 hover1 hots">Detectives</h6>
              <h6 className="px-4 hover1 hots">Baby</h6>
              <h6 className="px-4 hover1 hots">Audiobooks</h6>
              <h6 className="px-4 hover1 hots">Other</h6>
            </div>
          </div>
          <div></div>
        </div>
        <Card />
        <Katalog />
        <div className="container text-center">
          <h3 className="pt-5 mt-5 fw-bold" id="about">
            About Store
          </h3>
          <div className="row siu">
            <div className="col-3 ">
              <h1 className="fw-bold ">1</h1>
              <span> Branches all over the country</span>
            </div>
            <div className="col-3">
              <h1 className="fw-bold ">585</h1>
              <span> Products in the catalog</span>
            </div>
            <div className="col-3">
              <h1 className="fw-bold ">8659</h1>
              <span> Buyers</span>
            </div>
            <div className="col-3">
              <h1 className="fw-bold ">72</h1>
              <span>Hours of delivery by city</span>
            </div>
          </div>
          <div>
            <h3 className="py-5 mt-5 fw-bold" id="delive">
              Delivery
            </h3>
            <p>
              We work without holidays and weekends! Residents of Kyiv can
              receive an order on the day of its registration. Customers from
              other cities of Ukraine can receive an order within 1-5 days,
              depending on the location of the settlement and the chosen <br />{" "}
              delivery method. Orders over UAH 1000 are delivered free of
              charge*. You can see the available methods, exact terms and cost
              of delivery during checkout in the order basket, after choosing
              the city of delivery. <br />
              <span className="fw-bold fs-5"> More</span>
            </p>
          </div>
          <div>
            <h3 className="py-5 mt-5 fw-bold" id="delive">
              Follow us on social networks
            </h3>
            
          </div>
        </div>
      </>
    );
  }
};

export default Header;
