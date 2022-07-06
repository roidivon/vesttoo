import { useQuery } from 'react-query';
import { Link } from '../../types/Link';
import { GET_LINKS_QUERY_KEY } from '../../consts';
import { AXIOS_CLIENT } from '../../utils/axiosClient';

export const useLinks = () => {
  const { isLoading, data, error, refetch } = useQuery<any, void, Link[]>(
    GET_LINKS_QUERY_KEY,
    () => AXIOS_CLIENT('/links').then(({ data }) => data),
  );
  return { isLoading, data, error, refetch };
};
