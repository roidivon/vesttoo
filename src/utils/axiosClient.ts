import Axios from 'axios';

export const AXIOS_CLIENT = Axios.create({ baseURL: 'http://localhost:3001' });
