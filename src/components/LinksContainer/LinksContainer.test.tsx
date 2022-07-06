import * as hooks from './useLinks';
import { render, screen } from '@testing-library/react';
import { LinksContainer } from './LinksContainer';

const mockUseLinksResult = (result: any) =>
  jest.spyOn(hooks, 'useLinks').mockImplementation(() => result);

describe('LinksContainer', () => {
  it('should show loading state', () => {
    mockUseLinksResult({ isLoading: true });
    render(<LinksContainer />);
    expect(screen.getByTestId('loading-state')).toBeInTheDocument();
  });

  it('should show error state', () => {
    mockUseLinksResult({ isLoading: false, error: true });
    render(<LinksContainer />);
    expect(screen.getByTestId('error-state')).toBeInTheDocument();
  });

  it('should show empty state', () => {
    mockUseLinksResult({ isLoading: false, error: false, data: [] });
    render(<LinksContainer />);
    expect(screen.getByTestId('empty-state')).toBeInTheDocument();
  });
});
