import axios from 'axios';

const NASA_APOD_URL = import.meta.env.VITE_NASA_APOD_URL;

export const fetchApod = async (params: { start_date: string; end_date: string }) => {
  return axios.get(NASA_APOD_URL, { params });
};
