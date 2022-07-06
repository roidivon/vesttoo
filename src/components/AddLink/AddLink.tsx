import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddLink } from './useAddLink';
import { VALIDATION_SCHEMA, FormData } from './consts';

export const AddLink = () => {
  const form = useForm<FormData>({
    defaultValues: {
      url: '',
    },
    resolver: yupResolver(VALIDATION_SCHEMA),
  });
  const { createLink, isCreatingLink, error } = useAddLink(form.reset);
  const errorMessage = form.formState.errors.url?.message || error || '';
  return (
    <div className='mb-8 pt-4'>
      <form
        className='flex max-w'
        onSubmit={form.handleSubmit(({ url }) => createLink(url))}
      >
        <input
          data-testid='input'
          className='grow rounded border-solid border-2 border-indigo-600 mr-4 h-10 p-2'
          {...form.register('url')}
        />

        <button
          data-testid='submit-button'
          type='submit'
          disabled={isCreatingLink}
          className='w-40 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
          {isCreatingLink ? '...' : 'Add Link'}
        </button>
      </form>
      {errorMessage && (
        <div className='absolute text-red-500' data-testid='error-message'>
          {errorMessage}
        </div>
      )}
    </div>
  );
};
