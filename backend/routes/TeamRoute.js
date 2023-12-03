import express from "express";
import { 
    getTeams, 
    getTeamById,
    saveTeam,
    updateTeam,
    deleteTeam
} from "../controllers/TeamController.js";

const router = express.Router();

router.get('/teams', getTeams);
router.get('/teams/:id', getTeamById);
router.post('/teams', saveTeam);
router.patch('/teams/:id', updateTeam);
router.delete('/teams/:id', deleteTeam);

export default router;