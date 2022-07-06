import { LoadingState } from '../States/LoadingState';
import { ErrorState } from '../States/ErrorState';
import { EmptyState } from '../States/EmptyState';
import { LinkView } from '../LinkView/LinkView';
import { useLinks } from './useLinks';

export const LinksContainer = () => {
  const { isLoading, data, error, refetch } = useLinks();
  if (isLoading) {
    return <LoadingState />;
  }
  if (error) {
    return <ErrorState reload={refetch} />;
  }
  if (!data || data.length === 0) {
    return <EmptyState />;
  }
  return (
    <div data-testid='links'>
      {data.map((link) => (
        <LinkView key={link.id} {...link} />
      ))}
    </div>
  );
};
