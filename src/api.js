import axios from 'axios';

const BASE_URL = 'https://l-w-news.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);

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

  return data.article;
};

export const getCommentsByArticle = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};
export const deleteArticleById = async article_id => {
  const data = await axios.delete(`${BASE_URL}/articles/${article_id}`);
  return data;
};

export const deleteComment = async (article_id, comment_id) => {
  console.log(article_id, comment_id, '<<FROMTHE API');
  const data = axios.delete(
    `${BASE_URL}/articles/${article_id}/comments/${comment_id}`
  );
  return data;
};

export const fetchUser = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
};

export const addCommentByArticleId = async (body, article_id, userObj) => {
  console.log(body, article_id, userObj);
  const { username } = userObj;
  const comment = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    {
      body,
      username,
    }
  );
  return { ...comment, author: comment.username };
};

export const voteOnResource = async ({ article_id, direction, comment_id }) => {
  const URL = comment_id
    ? `${BASE_URL}/articles/${article_id}/comments/${comment_id}`
    : `${BASE_URL}/articles/${article_id}`;

  const { data } = await axios.patch(URL, {
    inc_votes: direction,
  });
  return data.article;
};

export const addArticle = async (title, topic, body, author) => {
  console.log(title, topic, body, author);
  const res = await axios.post(`${BASE_URL}/topics/${topic}/articles`, {
    title,
    body,
    author,
  });
  return res.data.article;
};
