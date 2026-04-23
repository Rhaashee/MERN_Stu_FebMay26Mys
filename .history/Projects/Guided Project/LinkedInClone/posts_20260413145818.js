const db = require('./data');
const events = require('./events');

function createPost(content) {

  if (!content) {
    events.emit('operationFailed', "Empty post");
    return;
  }

  const post = {
    id: Date.now().toString(),
    user: db.currentUser.id,
    content: content,
    likes: [],
    comments: []
  };

  db.posts.push(post);
  events.emit('postCreated');
}

function likePost(postId) {

  const post = db.posts.find(function(p) {
    return p.id === postId;
  });

  if (!post) {
    events.emit('operationFailed', "Post not found");
    return;
  }

  post.likes.push(db.currentUser.id);
  events.emit('postLiked');
}

function commentPost(postId, comment) {

  const post = db.posts.find(function(p) {
    return p.id === postId;
  });

  if (!post) {
    events.emit('operationFailed', "Post not found");
    return;
  }

  post.comments.push({
    user: db.currentUser.id,
    comment: comment
  });

  events.emit('commentAdded');
}

module.exports = {
  createPost,
  likePost,
  commentPost
};