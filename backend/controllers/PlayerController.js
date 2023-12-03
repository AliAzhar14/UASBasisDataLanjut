import Player from "../models/PlayerModel.js";

export const getPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPlayerById = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        res.json(player);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const savePlayer = async (req, res) => {
    const player = new Player(req.body);
    try {
        const insertedplayer = await player.save();
        res.status(201).json(insertedplayer);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePlayer = async (req, res) => {
    try {
        const updatedplayer = await Player.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedplayer);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePlayer = async (req, res) => {
    try {
        const deletedplayer = await Player.deleteOne({_id:req.params.id});
        res.status(200).json(deletedplayer);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}