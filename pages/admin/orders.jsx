import React from "react";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";

function Orders() {
  return (
    <Layout>
      <div className="d-flex">
        <Sidebar title="Orders" />
        <h2>Orders</h2>
      </div>
    </Layout>
  );
}

export default Orders;
