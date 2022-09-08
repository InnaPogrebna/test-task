import React from 'react';
import '../App.scss';
import { User } from '../types/user';

type Props = {
  users: User[];
  perPage: number;
  currentPage: number;
  getNextPage: () => void;
  getPrevPage: () => void;
};

export const Pagination: React.FC<Props> = ({
  users,
  perPage,
  currentPage,
  getNextPage,
  getPrevPage,

}) => {
  const pageNumbers = Math.ceil(users.length / perPage);

  return (
    <div className="pagination">
      <button
        type="button"
        className={`pagination__button pagination__button--prev
        ${currentPage === 1 ? 'pagination__disabled' : ''}`}
        onClick={getPrevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        type="button"
        className={`pagination__button pagination__button--next
        ${currentPage >= pageNumbers ? 'pagination__disabled' : ''}`}
        onClick={getNextPage}
        disabled={currentPage >= pageNumbers}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
