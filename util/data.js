export const userByEmailQuery = (email) => {
  const query = `*[_type == "author" && email == '${email}']`;
  return query;
};
export const productQuery = (specId) => {
  let query = "";
  if (specId) {
    query = `*[_type=="specialite" && _id == '${specId}']{
      name,
      "relatedMovies": *[_type=='product' && references(^._id)]{ ... }
    }`;
  } else {
    query = `*[_type == "product" ]`;
  }
  return query;
};
export const specualityQuery = () => {
  const query = `*[_type == "specialite" ]`;
  return query;
};
