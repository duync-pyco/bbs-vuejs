import Axios from "axios";

const baseUrl = "http://localhost:3000/articles";

export const getAll = async () => {
  const res = await Axios.get(baseUrl);
  return res.data;
};

export const getById = async id => {
  const res = await Axios.get(`${baseUrl}/${id}`);
  return res.data;
};

export const create = async article => {
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
  const res = Axios.put(`${baseUrl}/${article.id}`, article);
  return res.data;
};

export const remove = id => {
  const res = Axios.delete(`${baseUrl}/${id}`);
  return res.data;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};
