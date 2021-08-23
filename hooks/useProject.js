import useSWR from "swr";
import {server} from "../config";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useProject(name) {
  const {data, error} = useSWR(name ? `${server}/api/projects/${name}` : null, fetcher);

  return {
    project: data,
    isLoading: !error && !data,
    isError: error
  }
}
