import React from 'react';

type ErrorStateProps = {
  reload: Function;
};

export const ErrorState = ({ reload }: ErrorStateProps) => (
  <div
    className='mx-auto container text-center max-w pt-10'
    data-testid='error-state'
  >
    <div className='text-red-500'>Failed to load links</div>
    <button className='text-blue-500 underline' onClick={() => reload()}>
      Retry
    </button>
  </div>
);
