import axios from 'axios';

const axiosInterceptors = () => {
  axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      // handler axios errors

      return Promise.reject(error);
    },
  );
};

export default axiosInterceptors;
