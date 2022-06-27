import { useState } from "react";

import { api, key } from "services/api";

function useApi() {
  const [loading, setLoading] = useState(false);

  api.interceptors.request.use(
    (config) => {
      setLoading(true);
      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => Promise.reject(error)
  );

  return { api, apiKey: key, loading };
}

export default useApi;
