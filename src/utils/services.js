import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5252",
});

//Authen & Login Services

export const login = async (username, password) =>
  await api.post("/api/Login", {
    username: username,
    password: password,
  });

export const authen = async (token) => {
  const customHeader = {
    Authorization: "Bearer " + token,
  };
  await api.get("/api/Login", {
    headers: customHeader,
  });
};

//Product Services

export const createProduct = async (product) => {
  await api.post("api/Product/createProduct", {
    id: product.id,
    title: product.title,
    text: product.text,
    rating: product.rating,
    btn: product.btn,
    img: product.img,
    price: product.price,
  });
};

export const getPopularSales = async () => {
  const res = await api.get("api/Product/popularSales");
  console.log(res.data);
  return res.data;
};

export const getTopRateSales = async () => {
  const res = await api.get("api/Product/topRateSales");
  console.log(res.data);
  return res.data;
};

export const getProducts = async () => {
  const res = await api.get("api/Product/products");
  console.log(res.data);
  return res.data;
};

//Story

export const getStory = async () => {
  const res = await api.get("api/Story");
  return res;
};

export const createStory = async (story) => {
  await api.post("api/Story/createStory", {
    id: story.id,
    heading: story.title,
    text: story.text,
    btn: story.btn,
    url: story.url,
    img: story.img,
    like: story.like,
    time: story.time,
  });
};
