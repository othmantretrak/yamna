import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import Layout from "../components/Layout";
import { productQuery, specualityQuery } from "../util/data";
//import styles from "../styles/Product.module.css";

function Product() {
  const [specialilies, setSpecialilies] = useState([]);
  const [products, setProducts] = useState([]);
  const [specId, setSpecId] = useState(null);
  useEffect(() => {
    const query = specualityQuery();

    client.fetch(query).then((data) => {
      setSpecialilies(data);
      //console.log({ data });
    });
  }, []);
  useEffect(() => {
    const query = productQuery(specId);

    client.fetch(query).then((data) => {
      specId ? setProducts(data[0].relatedMovies) : setProducts(data);
      //console.log({ productQuery: data[0].relatedMovies });
    });
  }, [specId]);
  return (
    <Layout>
      <div className="bg-secondary  h6 mt-3 p-1 text-center text-light">
        <p>Aceuill / Produit</p>
      </div>

      <section className="category">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div>
                <aside className="side-area product-side side-shadow mt-5">
                  <div className="side-title">
                    <h3>Nos spécialités</h3>
                  </div>
                  <div className="side-content">
                    <ul className="list-group list-group-flush">
                      {specialilies.map((s) => (
                        <li
                          className="list-group-item"
                          onClick={() => setSpecId(s._id)}
                          key={s._id}
                        >
                          {s.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product-top d-flex justify-content-between align-items-center">
                    <div className="product-sec product-item">
                      <h2 className="my-5">Choisissez votre Gateaux Préferé</h2>
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
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Product;
