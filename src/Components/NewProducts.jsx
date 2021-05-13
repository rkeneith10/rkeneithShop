/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../css/bootstrap.css";
import "../css/nav.css";
import "../css/style.css";

import imgt4 from "../images/t4.jpg";
import imgt5 from "../images/t5.jpg";
import imgt6 from "../images/t6.jpg";

const NewProducts = () => {
  // const [products1, setProducts1] = useState("");
  const products = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97",
    },
    {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
    },
    {
      albumId: 1,
      id: 7,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      url: "https://via.placeholder.com/600/b0f7cc",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumId: 1,
      id: 8,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      url: "https://via.placeholder.com/600/54176f",
      thumbnailUrl: "https://via.placeholder.com/150/54176f",
    },
    {
      albumId: 1,
      id: 9,
      title: "qui eius qui autem sed",
      url: "https://via.placeholder.com/600/51aa97",
      thumbnailUrl: "https://via.placeholder.com/150/51aa97",
    },
    {
      albumId: 1,
      id: 10,
      title: "beatae et provident et ut vel",
      url: "https://via.placeholder.com/600/810b14",
      thumbnailUrl: "https://via.placeholder.com/150/810b14",
    },
    {
      albumId: 1,
      id: 11,
      title: "nihil at amet non hic quia qui",
      url: "https://via.placeholder.com/600/1ee8a4",
      thumbnailUrl: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      albumId: 1,
      id: 12,
      title:
        "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      url: "https://via.placeholder.com/600/66b7d2",
      thumbnailUrl: "https://via.placeholder.com/150/66b7d2",
    },
    {
      albumId: 1,
      id: 13,
      title: "repudiandae iusto deleniti rerum",
      url: "https://via.placeholder.com/600/197d29",
      thumbnailUrl: "https://via.placeholder.com/150/197d29",
    },
    {
      albumId: 1,
      id: 14,
      title: "est necessitatibus architecto ut laborum",
      url: "https://via.placeholder.com/600/61a65",
      thumbnailUrl: "https://via.placeholder.com/150/61a65",
    },
  ];

  // useEffect(() => {
  //   const url = "https://jsonplaceholder.typicode.com/photos";
  //   axios.get(url).then((res) => {
  //     const responseProducts = res.data;
  //     setProducts1(responseProducts);
  //     //console.log(responseProducts);
  //   });
  // }, []);
  return (
    <div>
      <div className="container">
        <div className="col-md-12">
          <h3
            style={{ textAlign: "center", color: "gray", fontWeight: "bold" }}
          >
            Shop by Category
          </h3>
          <p
            style={{ textAlign: "center", color: "gray", marginBottom: "30px" }}
          >
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="row">
          {products.splice([0], [10]).map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-6"
              key={product.id}
              style={{ marginBottom: "20px" }}
            >
              <div className="card" style={{ borderRadius: "0px" }}>
                <img className="card-img-top" src={product.url} />
                <div className="card-body">
                  <h5 className="card-title">Air Jordan retro 1</h5>
                  <p
                    className="card-text"
                    style={{
                      borderBottom: "1px solid #e3e3e3",
                      paddingBottom: "1em",
                      fontSize: "13px",
                      fontStyle: "oblique",
                      color: "#67686d",
                    }}
                  >
                    Some quick example text to build on the card title.
                  </p>
                  <p style={{ color: "#f45a40", fontSize: "16px," }}>
                    $ {product.id * 100}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
