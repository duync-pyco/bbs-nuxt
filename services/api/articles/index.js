import Axios from 'axios';

const baseUrl = process.env.baseUrl;
const generateUrl = path => `${baseUrl}/articles${path}.json`;

export const getAll = async () => {
  const res = await Axios.get(generateUrl(''));
  return res.data;
};

export const getById = async id => {
  const res = await Axios.get(generateUrl(`/${id}`));
  return res.data;
};

export const create = async article => {
  const newArticle = {
    ...article,
    id: new Date().getTime(),
    updatedAt: new Date().toUTCString(),
    views: 0
  };

  const res = await Axios.post(fullPath, newArticle);
  return res.data;
};

export const update = async article => {
  const res = await Axios.put(generateUrl(`/${id}`), article);
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
