import Team from "../models/TeamModel.js";

export const getTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getTeamById = async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        res.json(team);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveTeam = async (req, res) => {
    const team = new Team(req.body);
    try {
        const insertedteam = await team.save();
        res.status(201).json(insertedteam);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateTeam = async (req, res) => {
    try {
        const updatedteam = await Team.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedteam);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteTeam = async (req, res) => {
    try {
        const deletedteam = await Team.deleteOne({_id:req.params.id});
        res.status(200).json(deletedteam);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}