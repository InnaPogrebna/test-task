import React from 'react';
import { User } from '../types/user';
import { Post } from '../types/post';
import { PostsUser } from './PostsUser';

type Props = {
  users: User[];
  posts: Post[];
  openPosts: boolean,
  getUserPostId: (postId: number) => void;
};

export const UsersList: React.FC<Props> = ({
  users, posts, openPosts, getUserPostId,
}) => {
  return (
    <div className={`users ${openPosts ? 'is-open__users' : ''}`}>
      <div className="is__open__users-wrapper">
        <ul className="users__list">
          {users.map((user) => (
            <li
              key={user.id}
              className={`users__list-item ${openPosts ? 'is-open__users-item' : ''}`}
            >
              <p className="users__list-item-text">
                Name:&nbsp;
                {user.name}
              </p>
              <p className="users__list-item-text">
                Email:&nbsp;
                {user.email}
              </p>
              <p className="users__list-item-text">
                Phone: &nbsp;
                {user.phone}
              </p>
              <p className="users__list-item-text">
                id:&nbsp;
                {user.id}
              </p>
              <button
                type="button"
                className={`users__list-button ${openPosts ? 'is-open__users-button' : ''}`}
                onClick={() => getUserPostId(user.id)}
              >
                Lorem ipsum
              </button>
            </li>
          ))}
        </ul>
      </div>
      {openPosts && (
        <div className="users__posts">
          <PostsUser posts={posts} />
        </div>
      )}
    </div>
  );
};

export default UsersList;
