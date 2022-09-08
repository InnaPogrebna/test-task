/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import '../App.scss';
import { Post } from '../types/post';

type Props = {
  posts: Post[],
};

export const PostsUser: React.FC<Props> = ({ posts }) => {
  const [openPost, setOpenPost] = useState(false);
  const getOpenPost = (event: React.FormEvent<HTMLLIElement>): void => {
    setOpenPost(true);
    if (openPost === true) {
      (event.currentTarget.childNodes[1] as Element).classList.remove('hide');
      (event.currentTarget.childNodes[1] as Element).classList.add('open');
      setOpenPost(false);
    } else {
      (event.currentTarget.childNodes[1] as Element).classList.remove('open');
      (event.currentTarget.childNodes[1] as Element).classList.add('hide');
    }
  };

  return (
    <div className="posts">
      <div className="posts__scroll">
        <ul className="posts__list">
          {posts.map((post) => (
            <li key={post.id} className="posts__list-item" onClick={getOpenPost}>
              {post.title}
              <p className="posts__list-item-text hide">{post.body}</p>
              <p className="posts__list-border"></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostsUser;
