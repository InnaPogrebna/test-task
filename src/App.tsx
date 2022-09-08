/* eslint-disable no-console */
import React, { useEffect, useState, useMemo } from 'react';
import './App.scss';

// import { PostDetails } from './components/PostDetails';
import { Post } from './types/post';
import { getUserPosts } from './api/posts';
import { User } from './types/user';
import { getUsers } from './api/users';
import { Header } from './components/Header';
import { UsersList } from './components/UsersList';
import { Pagination } from './components/Pagination';
import { Sort } from './components/Sort';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [userPostId, setUserPostId] = useState(0);
  const [sortOrder, setSortOrder] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [openPosts, setOpenPosts] = useState(false);
  const perPage = 4;
  const lastIndex = Number(currentPage) * Number(perPage);
  const firstIndex = Number(lastIndex) - Number(perPage);

  const getPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const getNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const getUserPostId = (postId: number) => {
    setUserPostId(postId);
    setOpenPosts(true);

    if (userPostId === postId) {
      setOpenPosts(!openPosts);
    }
  };

  const sortByName = () => {
    setSortBy('name');
    setSortOrder('asc');
    if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('asc');
    }
  };

  useEffect(() => {
    getUsers().then((response) => {
      return setUsers(response);
    });
  }, [lastIndex, firstIndex]);

  useEffect(() => {
    getUserPosts(userPostId).then((response) => {
      if (userPostId !== 0) {
        setPosts(response.filter((user) => user.userId === userPostId));
      } else {
        setPosts([]);
      }
    });
  }, [userPostId]);

  const usersSearch = useMemo(
    () => users
      .filter((user) => (searchValue.length !== 0
        ? user.name.toLowerCase().includes(searchValue.toLowerCase())
        : user))
      .sort((a, b) => {
        switch (sortBy) {
          case 'name':
            return sortOrder === 'asc'
              ? a[sortBy].localeCompare(b[sortBy])
              : b[sortBy].localeCompare(a[sortBy]);
          default:
            return 0;
        }
      }),
    [users, searchValue, sortBy, sortOrder],
  );

  const currentUsers = usersSearch.slice(firstIndex, lastIndex);

  return (
    <div className="page">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Sort sortByName={sortByName} />
      <UsersList
        users={currentUsers}
        posts={posts}
        getUserPostId={getUserPostId}
        openPosts={openPosts}
      />
      <Pagination
        users={usersSearch}
        perPage={perPage}
        currentPage={currentPage}
        getNextPage={getNextPage}
        getPrevPage={getPrevPage}
      />
    </div>
  );
};
