import { useQuery } from "react-query";
import pexelsService from "../services/pexels";

export function usePhotos({
  query = "",
  perPage = 5,
}: {
  query: string;
  perPage?: number;
}) {
  const photosQuery = useQuery(
    ["photos", { query, perPage }],
    () => pexelsService.getPhotosByQuery({ query, perPage }),
    { enabled: !!query }
  );

  return photosQuery;
}

export default usePhotos;
