// Creating post 
const db = require('./data');
const events = require('./events');

function createPost(content) {
  const post = {
    id: Date.now().toString(),
    user: db.currentUser.id,
    content,
    likes: [],
    comments: []
  };

  db.posts.push(post);
  events.emit('postCreated');
}

// Like
function likePost(postId) {
  const post = db.posts.find(p => p.id === postId);

  if (!post) return events.emit('operationFailed', 'Post not found');

  post.likes.push(db.currentUser.id);
  events.emit('postLiked');
}