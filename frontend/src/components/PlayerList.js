import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PlayerList = () => {
    const [players, setPlayer] = useState([]);

useEffect(() => {getPlayers();}, []);

const getPlayers = async () => {
    const response = await axios.get("http://localhost:5000/players");
    setPlayer(response.data);
};

const deletePlayer = async (id) => {
    try {
    await axios.delete(`http://localhost:5000/players/${id}`);
    getPlayers();
    } catch (error) {
    console.log(error);
    }
};

return (
    <div className="columns mt-5">
    <div className="column is-half">
        <Link to="add" className="button is-success">
        Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
        <thead>
            <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {players.map((player, index) => (
            <tr key={player._id}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.age}</td>
                <td>{player.gender}</td>
                <td>{player.email}</td>
                <td>{player.phone}</td>
                <td>
                <Link to={`edit/${player._id}`}className="button is-info is-small mr-1">Edit
                </Link>
                <button onClick={() => deletePlayer(player._id)}className="button is-danger is-small">Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
);
};

export default PlayerList;
