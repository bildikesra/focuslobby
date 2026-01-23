import { Router } from "express";
import { createRoom, getRooms } from '../controllers/roomController.js';

const router = Router();

// gelen istek GET ise getRooms'a git
router.get('/', getRooms);

// gelen istek POST ise createRoom'a git
router.post('/', createRoom);

export default router;
