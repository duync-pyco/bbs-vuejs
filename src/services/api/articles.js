import Axios from "axios";

const baseUrl = "http://localhost:3000/articles";

const asyncTimeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const getAll = async () => {
  await asyncTimeout(500);
  const res = await Axios.get(baseUrl);
  return res.data;
};

export const getById = async id => {
  await asyncTimeout(500);
  const res = await Axios.get(`${baseUrl}/${id}`);
  return res.data;
};

export const create = async article => {
  await asyncTimeout(500);
  const newArticle = {
    ...article,
    id: new Date().getTime(),
    updatedAt: new Date().toUTCString(),
    views: 0
  };

  const res = Axios.post(baseUrl, newArticle);
  return res.data;
};

export const update = async article => {
  await asyncTimeout(500);
  const res = Axios.put(`${baseUrl}/${article.id}`, article);
  return res.data;
};

export const remove = async id => {
  await asyncTimeout(500);
  const res = await Axios.delete(`${baseUrl}/${id}`);
  return res.data;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};
