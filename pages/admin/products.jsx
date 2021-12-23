import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import Masonry from "react-masonry-css";
import { client, urlFor } from "../../client";
import { productQuery } from "../../util/data";
import Image from "next/image";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 2,
  1000: 2,
  500: 2,
};

function Products() {
  const [products, setProducts] = useState([]);
  let specId = null;
  useEffect(() => {
    const query = productQuery((specId = null));

    client.fetch(query).then((data) => {
      specId ? setProducts(data[0].relatedMovies) : setProducts(data);
      console.log({ productQuery: data[0].relatedMovies });
    });
  }, []);

  return (
    <Layout>
      <div className="d-flex">
        <Sidebar title="Products" />
        <div className="d-flex flex-wrap gap-2 mt-5">
          {products?.map((p) => (
            <div style={{ width: "100px" }} className="w-25" key={p._id}>
              <Image
                src={urlFor(p.mainImage).width(250).url()}
                alt=""
                width="250px"
                height="250px"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Products;
