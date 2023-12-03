import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import PlayerRoute from "./routes/PlayerRoute.js";
import TeamRoute from "./routes/TeamRoute.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/chamber_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected...'));

app.use(cors());
app.use(express.json());
app.use(PlayerRoute);
app.use(TeamRoute);


app.listen(5000, ()=> console.log('Server up and running...'));