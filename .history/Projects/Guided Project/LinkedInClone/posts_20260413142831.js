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