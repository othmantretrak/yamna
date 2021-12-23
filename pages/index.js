import Image from "next/image";
import { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import Layout from "../components/Layout";
import { productQuery, specualityQuery } from "../util/data";

export default function Home() {
  const [specialilies, setSpecialilies] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const query = specualityQuery();

    client.fetch(query).then((data) => {
      setSpecialilies(data);
      console.log({ data });
    });
  }, []);
  useEffect(() => {
    const query = productQuery();

    client.fetch(query).then((data) => {
      setProducts(data);
      console.log({ data });
    });
  }, []);
  return (
    <Layout>
      <main>
        <div>
          <div className="home">
            <div className="col-left">
              <h3>Soyez Bienvenue !</h3>
              <p>
                Ajoutez Maintenant votre Gateau Préféré à votre Panier et Passez
                votre Commande à livrée à la ou vous étes ! Profitez de votre
                Premier Cadeau d&apos;une réduction de 5% !
                <p>
                  {" "}
                  Les Meilleurs Délice Chez <span id="yamna">Yamna</span>{" "}
                  <span id="delice">Délice</span> .
                </p>
              </p>
              <a href="">
                <button className="btn">Commandez</button>
              </a>
              <div className="Social_icons">
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div className="col-right">
              <img src="images/first.png" />
            </div>
          </div>
        </div>
        <div className="spécialité">
          <div id="Speciality" className="small-container">
            <h2 className="title">Speciality</h2>
            <div className="row">
              {specialilies.map((s) => (
                <div key={s._id} className="col-6">
                  <img src={urlFor(s.mainImage).width(250).url()} alt="" />
                  <h3>{s.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <section id="about" className="about">
              <h3>
                Pourquoi choisir <span id="yamna">Yamna</span>{" "}
                <span id="delice">Délice</span> ?
              </h3>
              <p>
                {" "}
                Vous voulez des gâteaux faits maison mais vous n&apos;avez pas
                de temps ? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Quas, adipisci. Quasi fugit magni, velit omnis dicta eaque
                rem blanditiis vero quod inventore nam maiores minus quidem
                repellat voluptas excepturi corporis.
              </p>

              <button className="btn">
                {" "}
                Lire Plus <i className="fa fa-caret-right"></i>
              </button>
            </section>
          </div>
        </div>

        <section className="popular" id="popular">
          <h2 className="title">Populaire</h2>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {products.map((p) => (
              <div key={p._d} className="col">
                <div className="card h-100">
                  <Image
                    className="card-img-top"
                    src={urlFor(p.mainImage).width(308).url()}
                    width="380px"
                    height="200px"
                    alt=""
                  />

                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <div className="card-text">
                      {" "}
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn">Commandez</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="container">
          <div className="steps">
            <div className="box">
              <img src="/images/qualité.png" width="170px" alt="" />
              <h3>Profitez d&apos;une bonne qualité</h3>
            </div>
            <div className="box">
              <img src="/images/livraison.png" width="170px" alt="" />
              <h3>Livraison Rapide</h3>
            </div>
            <div className="box">
              <img
                className="p-box"
                src="/images/conf.png"
                width="170px"
                alt=""
              />
              <h3>La confiance avant Tout</h3>
            </div>
            <div className="box">
              <img src="/images/paiment.png" width="170px" alt="" />
              <h3>Differents Modes de Paiment </h3>
            </div>
          </div>
        </div>
        <section className="gallery" id="gallery">
          <h2 className="title">Gallerie</h2>
          <div className="box-container">
            <div className="box">
              <Image src="/images/biscuit3.png" layout="fill" alt="" />
              <div className="content">
                <h3>biscuit</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, omnis.
                </p>
                <div className="button">
                  <button className="btn">Commandez</button>
                </div>
              </div>
            </div>
            <div className="box">
              <Image src="/images/img1.jpg" layout="fill" alt="" />
              <div className="content">
                <h3>biscuit</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, omnis.
                </p>
                <div className="button">
                  <button className="btn">Commandez</button>
                </div>
              </div>
            </div>
            <div className="box">
              <Image src="/images/img20.jpg" layout="fill" alt="" />
              <div className="content">
                <h3>biscuit</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, omnis.
                </p>
                <div className="button">
                  <button className="btn">Commandez</button>
                </div>
              </div>
            </div>
            <div className="box">
              <Image src="/images/img21.jpg" layout="fill" alt="" />
              <div className="content">
                <h3>biscuit</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, omnis.
                </p>
                <div className="button">
                  <button className="btn">Commandez</button>
                </div>
              </div>
            </div>
            <div className="box">
              <Image src="/images/img22.jpg" layout="fill" alt="" />
              <div className="content">
                <h3>biscuit</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, omnis.
                </p>
                <div className="button">
                  <button className="btn">Commandez</button>
                </div>
              </div>
            </div>
            <div className="box">
              <Image src="/images/img9.jpg" layout="fill" alt="" />
              <div className="content">
                <h3>biscuit</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, omnis.
                </p>
                <div className="button">
                  <button className="btn">Commandez</button>
                </div>
              </div>
            </div>
            <div className="box">
              <Image src="/images/choco.png" layout="fill" alt="" />
              <div className="content">
                <h3>biscuit</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, omnis.
                </p>
                <div className="button">
                  <button className="btn">Commandez</button>
                </div>
              </div>
            </div>
            <div className="box">
              <Image src="/images/biscuit2.png" layout="fill" alt="" />
              <div className="content">
                <h3>biscuit</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, omnis.
                </p>
                <div className="button">
                  <button className="btn">Commandez</button>
                </div>
              </div>
            </div>
            <div className="box">
              <Image src="/images/biscuit.png" layout="fill" alt="" />
              <div className="content">
                <h3>biscuit</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, omnis.
                </p>
                <div className="button">
                  <button className="btn">Commandez</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
