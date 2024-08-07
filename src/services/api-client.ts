import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1eb4feaffb3444a98b76249b1aff216e",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(config?: AxiosRequestConfig) {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  }

  async get(id: string | number) {
    const res = await axiosInstance.get<T>(this.endpoint + "/" + id);
    return res.data;
  }
}

export default APIClient;
