import axios from 'axios';

const base_url = 'http://localhost:3000/rest/v1';

export default {
  async get_all_tasks() {
    const response = await axios.get(`${base_url}/tasks`);
    return response.data;
  },

  async delete_task(id: string) {
    const response = await axios.post(`${base_url}/tasks/${id}/delete`);
    return response.data;
  },

  async create_task(name) {
    const response = await axios.post(`${base_url}/tasks/new`, { task: { name } });
    return response.data;
  },

  async update_task(id, data) {
    const response = await axios.post(`${base_url}/tasks/${id}/update`, { task: data });
    return response.data;
  },
};
