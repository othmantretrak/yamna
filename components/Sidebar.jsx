import React from "react";
import ActiveLink from "./ActiveLink";

function Sidebar({ title }) {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "280px" }}
    >
      <span
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4">{title}</span>
      </span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <ActiveLink name="Create Product" href="/admin/create-product" />
        </li>
        <li className="nav-item">
          <ActiveLink
            name="Create Speciality"
            href="/admin/create-speciality"
          />
        </li>
        <li className="nav-item">
          <ActiveLink name="Orders" href="/admin/orders" />
        </li>
        <li className="nav-item">
          <ActiveLink name="Products" href="/admin/products" />
        </li>
        <li className="nav-item">
          <ActiveLink name="Customers" href="/admin/customers" />
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Sidebar;
