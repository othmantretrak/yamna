import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import Layout from "../components/Layout";
import { productQuery, specualityQuery } from "../util/data";
//import styles from "../styles/Product.module.css";

function Specialilies() {
  const [specialilies, setSpecialilies] = useState([]);
  useEffect(() => {
    const query = specualityQuery();

    client.fetch(query).then((data) => {
      setSpecialilies(data);
      console.log({ data });
    });
  }, []);
  return (
    <Layout>
      <section className="breadcrumb breadcrumb-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="crumb-inner">
                <div className="crumb-text">
                  <p>Aceuill / Specialilies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="category">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-top d-flex justify-content-between align-items-center">
                <div className="product-sec product-item">
                  <h2 className="my-5">Nos spécialités</h2>
                </div>
              </div>
            </div>
            {products.map((p) => (
              <div key={p._id} className="col-lg-4 col-sm-6">
                <div className="product-cate">
                  <div>
                    <img src={urlFor(p.mainImage).width(250).url()} />
                    <div className="product-icon">
                      <ul>
                        <li>
                          <a href="">
                            <i className="fas fa-heart"></i>
                          </a>{" "}
                        </li>
                        <li>
                          <a href="">
                            <i className="fas fa-shopping-cart"></i>
                          </a>{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="product-des">
                      <h5>{p.title}</h5>
                      <p>{p.price}</p>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Specialilies;
