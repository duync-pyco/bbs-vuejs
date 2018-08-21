import sampleData from "@/fixtures/sample-data.json";

const dbName = "duync-bbs";

if (!localStorage.getItem(dbName)) {
  localStorage.setItem(dbName, JSON.stringify(sampleData));
}

export const getAll = () => JSON.parse(localStorage.getItem(dbName));

export const getById = id => {
  const articles = JSON.parse(localStorage.getItem(dbName));
  const index = articles.findIndex(value => value.id === id);

  if (index < 0) return null;

  return articles[index];
};

export const create = article => {
  const articles = JSON.parse(localStorage.getItem(dbName));

  const newArticle = {
    ...article,
    id: new Date().getTime(),
    updatedAt: new Date().toUTCString(),
    views: 0
  };

  articles.push(newArticle);
  localStorage.setItem(dbName, JSON.stringify(articles));

  return articles;
};

export const update = article => {
  const articles = JSON.parse(localStorage.getItem(dbName));
  const index = articles.findIndex(value => value.id === article.id);

  if (index < 0) return articles;

  articles[index] = article;
  localStorage.setItem(dbName, JSON.stringify(articles));

  return articles;
};

export const remove = id => {
  const articles = JSON.parse(localStorage.getItem(dbName));
  const index = articles.findIndex(value => value.id === id);

  if (index < 0) return articles;

  articles.splice(index, 1);
  localStorage.setItem(dbName, JSON.stringify(articles));

  return articles;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};
