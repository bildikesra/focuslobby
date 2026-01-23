import { Router } from 'express';
import { registerUser, getUsers } from '../controllers/userController.js';

const router = Router();

// Get /api/users -> Tüm kullanıcıları getir
router.get('/', getUsers);

// Post /api/users/register -> Yeni kullanıcı oluştur.
router.post('/register', registerUser);

export default router;