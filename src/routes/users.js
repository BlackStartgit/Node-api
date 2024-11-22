import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/users.js';
import { validate } from '../middleware/validate.js';
import { userSchema } from '../validators/userValidator.js';

export const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', validate(userSchema.create), createUser);
router.put('/:id', validate(userSchema.update), updateUser);
router.delete('/:id', deleteUser);