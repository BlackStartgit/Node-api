let users = [];

export const userService = {
  findAll() {
    return users;
  },

  findById(id) {
    return users.find(u => u.id === id);
  },

  create(userData) {
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    return newUser;
  },

  update(id, userData) {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    
    users[index] = {
      ...users[index],
      ...userData,
      updatedAt: new Date().toISOString()
    };
    return users[index];
  },

  delete(id) {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return false;
    
    users.splice(index, 1);
    return true;
  }
};