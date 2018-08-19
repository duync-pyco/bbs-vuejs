import sampleData from "@/fixtures/sample-data.json";

const dbName = "duync-bbs";

if (!localStorage.getItem(dbName)) {
  localStorage.setItem(dbName, JSON.stringify(sampleData));
}

export const getAll = () => {
  return JSON.parse(localStorage.getItem(dbName));
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

  return newArticle;
};

export const update = article => {
  const articles = JSON.parse(localStorage.getItem(dbName));
  const index = articles.findIndex(value => value.id === article.id);

  if (index < 0) return null;

  articles[index] = article;
  localStorage.setItem(dbName, JSON.stringify(articles));

  return article[index];
};

export const remove = id => {
  const articles = JSON.parse(localStorage.getItem(dbName));
  const index = articles.findIndex(value => value.id === id);

  if (index < 0) return null;

  const removedArticle = articles[index];

  articles.splice(index, 1);
  localStorage.setItem(dbName, JSON.stringify(articles));

  return removedArticle;
};

export default {
  getAll,
  create,
  update,
  remove
};