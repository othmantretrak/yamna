import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Yamna Recipe</title>
        <meta name="description" content="Yamna Recipe" />
      </Head>
      <div className="container main-container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
