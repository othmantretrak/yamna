import React, { useEffect, useState } from "react";
import { client } from "../../client";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import { specualityQuery } from "../../util/data";

function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState("");
  const [fields, setFields] = useState();
  const [speciality, setSpeciality] = useState("");
  const [imageAsset, setImageAsset] = useState();
  const [wrongImageType, setWrongImageType] = useState(false);
  const [specialilies, setSpecialilies] = useState([]);

  useEffect(() => {
    const query = specualityQuery();

    client.fetch(query).then((data) => {
      setSpecialilies(data);
      console.log({ data });
    });
  }, []);

  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];
    // uploading asset to sanity
    if (
      selectedFile.type === "image/png" ||
      selectedFile.type === "image/svg" ||
      selectedFile.type === "image/jpeg" ||
      selectedFile.type === "image/gif" ||
      selectedFile.type === "image/tiff"
    ) {
      setWrongImageType(false);
      setLoading(true);
      client.assets
        .upload("image", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((document) => {
          setImageAsset(document);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Upload failed:", error.message);
        });
    } else {
      setLoading(false);
      setWrongImageType(true);
    }
  };

  const savePin = (e) => {
    e.preventDefault();
    console.log({
      title,
      price,
      description,
      image: imageAsset?._id,
      speciality,
    });
    if (title && price && imageAsset?._id && speciality) {
      const doc = {
        _type: "product",
        title,
        price,
        body: description,
        mainImage: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageAsset?._id,
          },
        },
        specialities: {
          _type: "reference",
          _ref: speciality,
        },
      };
      client
        .create(doc)
        .then(() => {
          console.log({ doc });
          setDescription("");
          setImageAsset("");
          setPrice("");
          setTitle("");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setFields(true);

      setTimeout(() => {
        setFields(false);
      }, 2000);
    }
  };
  return (
    <Layout>
      <div className="d-flex gap-4">
        <Sidebar title="Create Product" />
        <form className="flex-grow-1 mt-5">
          {fields && (
            <h4 className="bg-danger p-1 rounded-2 text-center text-white">
              Please add all fields.
            </h4>
          )}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Gateaux"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="number"
              className="form-control"
              placeholder="25"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Choose Pin Speciality</label>
            <select
              onChange={(e) => {
                console.log({ value: e.target.value });
                setSpeciality(e.target.value);
              }}
            >
              <option value="others" className="sm:text-bg bg-white">
                Select Category
              </option>
              {specialilies.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="file"
              name="upload-image"
              onChange={uploadImage}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <button onClick={savePin} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default CreateProduct;
