import Axios from 'axios';

const baseUrl = process.env.baseUrl;
const generateUrl = path => `${baseUrl}/articles${path}.json`;

export const getAll = async () => {
  const { data } = await Axios.get(generateUrl(''));

  if (data)
    return Object.keys(data).map(key => ({
      ...data[key],
      id: key
    }));
  else return [];
};

export const create = async article => {
  const newArticle = {
    ...article,
    updatedAt: new Date().toISOString(),
    views: 0
  };

  const res = await Axios.post(generateUrl(''), newArticle);
  return {
    ...newArticle,
    id: res.data.name
  };
};

export const getById = async id => {
  const res = await Axios.get(generateUrl(`/${id}`));

  if (!res.data) return null;

  return {
    ...res.data,
    id
  };
};

export const update = async article => {
  const res = await Axios.put(generateUrl(`/${article.id}`), article);
  return res.data;
};

export const remove = async id => {
  const res = await Axios.delete(generateUrl(`/${id}`));
  return res.data;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};
