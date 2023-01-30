import React from 'react';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types';
import { CommentList } from '../CommentList';
import '../../styles/components/PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <li className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length !== 0
        ? (<CommentList comments={comments} />)
        : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
    </li>
  );
};