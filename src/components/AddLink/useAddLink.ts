import { useMutation, useQueryClient } from 'react-query';
import { AXIOS_CLIENT } from '../../utils/axiosClient';
import { GET_LINKS_QUERY_KEY } from '../../consts';

export const useAddLink = (resetForm: Function) => {
  const client = useQueryClient();
  const mutation = useMutation<void, void, string>(
    async (url) => AXIOS_CLIENT.post('/link', { url }),
    {
      onSuccess: () => {
        client.invalidateQueries(GET_LINKS_QUERY_KEY);
        resetForm();
      },
    },
  );
  return {
    createLink: mutation.mutate,
    isCreatingLink: mutation.isLoading,
    error: mutation.error,
  };
};
