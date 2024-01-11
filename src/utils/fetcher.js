import axios from 'axios';

export const getFetch = async (url, params = {}) => {
  if (!url) return;

  try {
    return await axios.get(url, { params }).then(res => res.data);
  } catch (error) {
    throw error.response || error;
  }
}

export const postFetch = async (url, data = {}) => {
  if (!url) return;

  try {
    return await axios.post(url, data).then(res => res.data);
  } catch (error) {
    throw error.response || error;
  }
};

export const deleteFetch = async (url, test_id) => {
  if (!url) return;

  try {
    return await axios.delete(`${url}/${test_id}`).then(res => res.data);
  } catch (error) {
    throw error.response || error
  }
}

export const updateFetch = async (url, test) => {
  if (!url) return;

  try {
    return await axios.put(`${url}/${test.test_id}`, test).then(res => res.data)
  } catch (error) {
    throw error.response || error
  }

}
