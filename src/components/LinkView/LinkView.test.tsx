import * as hooks from './useDeleteLink';
import { render, screen, fireEvent } from '@testing-library/react';
import { LinkView } from './LinkView';

const mockUseDeleteLink = (result: any) =>
  jest.spyOn(hooks, 'useDeleteLink').mockImplementation(() => result);

const LINK = {
  id: 'id',
  url: 'url',
  image: 'image',
  title: 'title',
  description: 'description',
};

describe('LinkView', () => {
  it('renders link', () => {
    mockUseDeleteLink({});
    render(<LinkView {...LINK} />);
    expect(screen.getByTestId('title')).toHaveTextContent(LINK.title);
    expect(screen.getByTestId('description')).toHaveTextContent(
      LINK.description,
    );
  });

  it('it delete link when click X button', () => {
    const deleteLink = jest.fn();
    mockUseDeleteLink({ deleteLink });
    render(<LinkView {...LINK} />);
    fireEvent.click(screen.getByTestId('delete-link'));
    expect(deleteLink).toHaveBeenCalled();
  });

  it('delete link button should be disabled when isDeletingLink = true', () => {
    mockUseDeleteLink({ isDeletingLink: true });
    render(<LinkView {...LINK} />);
    expect(screen.getByTestId('delete-link')).toBeDisabled();
  });
});
