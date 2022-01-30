import Axios from "axios";
import { EnvironmentVariables } from "../consts";

const axios = Axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: EnvironmentVariables.pexels.apiKey,
  },
});

type Params = {
  query: string;
  perPage?: number;
};

export async function getPhotosByQuery({
  query,
  perPage: per_page = 1,
}: Params): Promise<PexelsResponse> {
  const { data } = await axios.get<PexelsResponse>("/search", {
    params: { query, per_page },
  });
  return data;
}

const pexelsService = {
  getPhotosByQuery,
};

export default pexelsService;
