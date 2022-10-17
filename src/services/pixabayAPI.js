import axios from 'axios';

export async function getPictures(query = '', page) {
  const res = await axios.get('http://pixabay.com/api', {
    params: {
      key: '29897039-6335e8959bf94ffd3acb5a033',
      q: query,
      per_page: 12,
      page,
    },
  });
  return res.data;
}
