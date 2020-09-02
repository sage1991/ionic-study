import { useLocation } from "react-router"
import queryString, { ParsedQuery } from "query-string";


const useQuery = <P extends ParsedQuery<string>> (): P => {
  const { search } = useLocation();
  return queryString.parse(search) as P;
}


export { useQuery };