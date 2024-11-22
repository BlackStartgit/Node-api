import { userService } from '../services/userService.js';

export const getUsers = (req, res) => {
  const users = userService.findAll();
  res.json(users);
};

export const getUserById = (req, res) => {
  const user = userService.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

export const createUser = (req, res) => {
  const newUser = userService.create(req.body);
  res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
  const updatedUser = userService.update(req.params.id, req.body);
  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(updatedUser);
};

export const deleteUser = (req, res) => {
  const deleted = userService.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(204).send();
};