import axios from "axios";

export const http = axios.create({
  baseURL: 'http://localhost',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  withXSRFToken: true,
});