import Storage from "@/services/storage/storage";

const getAll = ({ commit }) => {
  const data = Storage.getAll();
  commit("updateArticles", { data });
};

export default {
  getAll
};
