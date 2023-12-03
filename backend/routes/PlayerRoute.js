import express from "express";
import { 
    getPlayers, 
    getPlayerById,
    savePlayer,
    updatePlayer,
    deletePlayer
} from "../controllers/PlayerController.js";

const router = express.Router();

router.get('/players', getPlayers);
router.get('/players/:id', getPlayerById);
router.post('/players', savePlayer);
router.patch('/players/:id', updatePlayer);
router.delete('/players/:id', deletePlayer);

export default router;