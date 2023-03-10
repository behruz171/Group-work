import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./card.css";
const Card = () => {
  const qiymat = useSelector((state) => state);
  const [mas, setMas] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://6407167c862956433e63966f.mockapi.io/Data")
      .then((ress) => {
        setMas(ress.data);
        // dispatch({ type: "added2", payload: { mass: ress.data } });
        // localStorage.setItem("count1", JSON.stringify(ress.data));
        // localStorage.setItem("count", JSON.stringify(ress.data));
        // korz();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const massiv = JSON.parse(localStorage.getItem('count'))

  function like(index) {
    // if (qiymat.data.length > 0) {
    //   let current = [...qiymat.data];]u8kijylkiukijulj   n    

    //   current[index].status2 = !current[index].status2;
    //   setMas(current);
    //   localStorage.setItem("count", JSON.stringify(current));
    // } else {
    //   let current = [...mas];

    //   current[index].status2 = !current[index].status2;
    //   setMas(current);
    //   localStorage.setItem("count", JSON.stringify(current));
    // }

    dispatch({ type: "like", payload: { index: index } });
  }



  return (
    <div id="card" className="d-flex justify-content-center">
      <div className="d-flex mainnn">
        {qiymat.data.map((item, index) => {
          return (
            <div>
              <div
                className=" mx-3 card p-3 shadow "
                style={{ border: "none" }}
              >
                <Link to={`/more/${item.id}/${item.NameBook}`}>
                  <img
                    className="img_book"
                    src={
                      item.ImgBook
                        ? item.ImgBook
                        : "https://waynesville.otc.edu/media/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                    }
                    alt="rasm"
                  />
                </Link>
                <BsFillStarFill className="star" />

                <h5 className="grade">{item.grade}</h5>
                <h6>{item.NameBook}</h6>
                {/* <p>{item.Aftor}</p> */}
                <div className="d-flex align-items-center ">
                  <div>
                    <Link to={`/more/${item.id}/${item.NameBook}`}>
                      <button className="btn1 ">
                        Learn More <AiOutlineArrowRight  />
                      </button>
                    </Link>
                  </div>
                  <h3 className="like" onClick={() => like(index)}>
                    {item.status2 == true ? (
                      <AiOutlineHeart />
                    ) : (
                      <AiFillHeart />
                    )}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
