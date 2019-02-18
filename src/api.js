import axios from 'axios';

const BASE_URL = 'https://l-w-news.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  console.log(data, '<<<');
  return data.topics;
};

export const getArticles = async topic => {
  const URL = topic
    ? `${BASE_URL}/topics/${topic}/articles`
    : `${BASE_URL}/articles`;

  const { data } = await axios.get(URL);
  return data.articles;
};

export const getSortedArticles = async (sort_by, order, limit, p) => {
  const { data } = await axios.get(
    `${BASE_URL}/articles?sort_by=${sort_by}&order=${order}&limit=${limit}&p=${p}`
  );
  return data.articles;
};

export const getTopArticles = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/articles?sort_by=votes&order=desc`
  );

  return data.articles;
};

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  console.log(data);
  return data.article;
};

export const getCommentsByArticle = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};
