// Route template literal types for JSONPlaceholder

export type PostsRoute = '/posts';
export type PostRoute = `/posts/${number}`;
export type PostCommentsRoute = `/posts/${number}/comments`;

export type CommentsRoute = '/comments';
export type CommentRoute = `/comments/${number}`;

export type AlbumsRoute = '/albums';
export type AlbumRoute = `/albums/${number}`;
export type AlbumPhotosRoute = `/albums/${number}/photos`;

export type PhotosRoute = '/photos';
export type PhotoRoute = `/photos/${number}`;

export type TodosRoute = '/todos';
export type TodoRoute = `/todos/${number}`;

export type UsersRoute = '/users';
export type UserRoute = `/users/${number}`;
export type UserAlbumsRoute = `/users/${number}/albums`;
export type UserTodosRoute = `/users/${number}/todos`;
export type UserPostsRoute = `/users/${number}/posts`;

export type CollectionRoute =
  | PostsRoute
  | CommentsRoute
  | AlbumsRoute
  | PhotosRoute
  | TodosRoute
  | UsersRoute;

export type ItemRoute = PostRoute | CommentRoute | AlbumRoute | PhotoRoute | TodoRoute | UserRoute;

export type NestedRoute =
  | PostCommentsRoute
  | AlbumPhotosRoute
  | UserAlbumsRoute
  | UserTodosRoute
  | UserPostsRoute;

export type AnyRoute = CollectionRoute | ItemRoute | NestedRoute;
