import React from 'react';
import { Link } from '../../types/Link';
import { useDeleteLink } from './useDeleteLink';

export const LinkView = ({ image, title, description, url, id }: Link) => {
  const { deleteLink, isDeletingLink } = useDeleteLink();
  const handleDeleteLinkClick = () => deleteLink(id);
  return (
    <div className='flex relative'>
      <a
        className='flex-1 bg-slate-100 md:flex mb-2 hover:shadow-lg duration-200 shadow-black'
        href={url}
        target='_blank'
      >
        <img
          className='mb-4 mx-auto md:mx-0 md:w-64 md:mb-0 object-cover'
          src={image}
          alt=''
        />
        <div className='md:p-3 md:h-max text-center md:text-left'>
          <div data-testid='title'>{title}</div>
          <div className='text-teal-700 mt-2' data-testid='description'>
            {description}
          </div>
        </div>
      </a>
      <button
        data-testid='delete-link'
        disabled={isDeletingLink}
        onClick={handleDeleteLinkClick}
        className='md:relative absolute right-0 top-0 cursor-pointer text-teal-500 hover:text-teal-900 duration-100 w-10 p-4 flex items-center disabled:cursor-not-allowed'
      >
        X
      </button>
    </div>
  );
};
