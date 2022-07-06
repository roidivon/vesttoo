import { useMutation, useQueryClient } from 'react-query';
import { AXIOS_CLIENT } from '../../utils/axiosClient';
import { GET_LINKS_QUERY_KEY } from '../../consts';

export const useDeleteLink = () => {
  const client = useQueryClient();
  const mutation = useMutation<void, void, string>(
    (id) => AXIOS_CLIENT.delete(`/link/${id}`),
    {
      onSuccess: () => client.invalidateQueries(GET_LINKS_QUERY_KEY),
      onError: () => alert('Failed to delete link'),
    },
  );
  return {
    deleteLink: mutation.mutate,
    isDeletingLink: mutation.isLoading,
  };
};
