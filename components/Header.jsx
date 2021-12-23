import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import ActiveLink from "./ActiveLink";
import Image from "next/image";
import { LoginContext } from "../context/LoginContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useRouter } from "next/router";

function Header() {
  const [clicked, setClicked] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [name, setName] = useLocalStorage("name", "");
  //console.log({ admin });
  const router = useRouter();

  useEffect(() => {
    setAdmin(name.isAdmin);
  }, [name.isAdmin]);

  const logOut = () => {
    setName("");
    router.push("/");
  };
  return (
    <nav className={clicked ? "clicked" : ""}>
      <div className="logo">
        <Image src="/images/logo.png" width="100px" height="100px" alt="" />
      </div>
      <div className="navbar">
        <ActiveLink name="Aceuil" href="/" />
        <ActiveLink name="Spécialité" href="/specialilies" />
        <ActiveLink name="Produit" href="/products" />
        {admin === "yes" ? (
          <ActiveLink name="Dashboard" href="/dashboard" />
        ) : (
          <></>
        )}
        <ActiveLink name="Contact" href="/contact" />
        {admin !== "yes" && admin !== "no" ? (
          <ActiveLink name="Register" href="/register" />
        ) : (
          <></>
        )}
        {admin !== "yes" && admin !== "no" ? (
          <ActiveLink name="Login" href="/login" />
        ) : (
          <></>
        )}
        {admin === "yes" ? <ActiveLink name="Orders" href="/order" /> : <></>}
        {admin === "yes" || admin === "no" ? (
          <li className="list-group" onClick={logOut}>
            LogOut
          </li>
        ) : (
          <></>
        )}
      </div>
      <div className="bars" onClick={() => setClicked(!clicked)}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
}

export default Header;
