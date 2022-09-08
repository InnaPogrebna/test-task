import React from 'react';
import '../App.scss';

type Props = {
  searchValue: string,
  setSearchValue: (searchValue:string) => void,
};

export const Header: React.FC<Props> = ({ searchValue, setSearchValue }) => {
  return (
    <div className="header">
      <div className="header__logo">Lorem Ipsum</div>
      <input
        type="text"
        className="header__search"
        placeholder="Search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default Header;
