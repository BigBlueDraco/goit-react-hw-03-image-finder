import axios from 'axios';

export async function getPictures(query = '', page = 1, per_page = 12) {
  const res = await axios.get('https://pixabay.com/api', {
    params: {
      key: '29897039-6335e8959bf94ffd3acb5a033',
      q: query,
      per_page,
      page,
    },
  });
  return res.data;
}
