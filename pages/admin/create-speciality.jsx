import React, { useEffect, useState } from "react";
import { client } from "../../client";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import { specualityQuery } from "../../util/data";

function CreateSpeciality() {
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
    if (title && description && imageAsset?._id) {
      const doc = {
        _type: "specialite",
        title,
        description: description,
        mainImage: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageAsset?._id,
          },
        },
      };
      client
        .create(doc)
        .then(() => {
          console.log({ doc });
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
        {fields && <p className="text-red">Please add all fields.</p>}
        <Sidebar title="Create Product" />
        <form className="flex-grow-1 mt-5">
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

export default CreateSpeciality;
