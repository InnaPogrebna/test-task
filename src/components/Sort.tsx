import React from 'react';
import '../App.scss';

type Props = {
  sortByName: ()=> void,
};

export const Sort: React.FC<Props> = ({ sortByName }) => {
  return (
    <div className="header">
      <button
        type="button"
        className="users__list-button"
        onClick={sortByName}
      >
        Sort by Name
      </button>
    </div>
  );
};

export default Sort;
