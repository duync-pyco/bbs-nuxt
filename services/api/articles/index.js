const BASE_URL = process.env.BASE_URL;
const generateUrl = path => `${BASE_URL}/articles${path}.json`;

export const getAll = async ({ $axios }) => {
  const { data } = await $axios.get(generateUrl(''));

  if (data)
    return Object.keys(data).map(key => ({
      ...data[key],
      id: key
    }));
  else return [];
};

export const create = async ({ article, $axios }) => {
  const newArticle = {
    ...article,
    updatedAt: new Date().toISOString(),
    views: 0
  };

  const res = await $axios.post(generateUrl(''), newArticle);
  return {
    ...newArticle,
    id: res.data.name
  };
};

export const getById = async ({ id, $axios }) => {
  const res = await $axios.get(generateUrl(`/${id}`));

  if (!res.data) return null;

  return {
    ...res.data,
    id
  };
};

export const update = async ({ article, $axios }) => {
  const res = await $axios.put(generateUrl(`/${article.id}`), article);
  return res.data;
};

export const remove = async ({ id, $axios }) => {
  const res = await $axios.delete(generateUrl(`/${id}`));
  return res.data;
};

export default {
  getAll,
  create,
  getById,
  update,
  remove
};
