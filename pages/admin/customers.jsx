import React from "react";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";

function Customers() {
  return (
    <Layout>
      <div className="d-flex">
        <Sidebar title="Customers" />
        <h2>Customers</h2>
      </div>
    </Layout>
  );
}

export default Customers;
