let posts = [];

export const postService = {
  findAll() {
    return posts;
  },

  findById(id) {
    return posts.find(p => p.id === id);
  },

  create(postData) {
    const newPost = {
      id: Date.now().toString(),
      ...postData,
      createdAt: new Date().toISOString()
    };
    posts.push(newPost);
    return newPost;
  },

  update(id, postData) {
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    posts[index] = {
      ...posts[index],
      ...postData,
      updatedAt: new Date().toISOString()
    };
    return posts[index];
  },

  delete(id) {
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    posts.splice(index, 1);
    return true;
  }
};