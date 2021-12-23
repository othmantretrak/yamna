import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { client } from "../client";
import Layout from "../components/Layout";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { userByEmailQuery } from "../util/data";

function Login() {
  const [name, setName] = useLocalStorage("name", "Bob");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const getUser = (emaill) => {
    const query = userByEmailQuery(emaill);

    client.fetch(query).then((data) => {
      if (data[0]) {
        setName({ email: data[0].email, isAdmin: data[0].isAdmin });
        console.log({ data });
        router.push("/");
      } else {
        setError("Makaynch had l email");
        setTimeout(() => {
          setError("");
        }, 3000);
      }
      return;
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log({ email, password });
    if (!email && !password) {
      console.log("didnt walo");
      setError("3mr dakchi kaml");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    getUser(email);
  };
  return (
    <Layout>
      <form className="flex-grow-1 mt-5">
        {error ? (
          <h4 className="bg-danger p-1 rounded-2 text-center text-white">
            {error}
          </h4>
        ) : (
          ""
        )}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
            placeholder="Email@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="Password"
            className="form-control"
          />
        </div>

        <button onClick={loginHandler} className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default Login;
