import { useRouter } from "next/router";
import React, { useState } from "react";
import { client } from "../client";
import Layout from "../components/Layout";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Register() {
  const [name, setName] = useLocalStorage("name", "Bob");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spassword, setSpassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const saveUser = (e) => {
    e.preventDefault();
    console.log({ email, password, spassword });
    if (!email && !password && !spassword) {
      console.log("didnt walo");
      setError("3mr dakchi kaml");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    if (password !== spassword) {
      console.log("didnt mutch");
      console.log("didnt walo");
      setError("password machi b7al b7al");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    const doc = {
      _type: "author",
      email,
      password,
      isAdmin: "no",
    };
    client
      .create(doc)
      .then(() => {
        console.log({ doc });
        setName({ email: doc.email, isAdmin: doc.isAdmin });
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
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
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            onChange={(e) => {
              setSpassword(e.target.value);
            }}
            type="password"
            className="form-control"
          />
        </div>

        <button onClick={saveUser} className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default Register;
