import express from "express";
import rootRouters from "./routers/root.routers.js";
import { sequelize } from "./models/index.js";
import cors from 'cors';

const app = express();

const PORT = 8080;

app.use(cors({
    origin: "*",
    methods: "*"
}))
app.use(express.json());
app.use(rootRouters);

app.listen(PORT, () => {
    console.log("server starting port : ", PORT);
});

await sequelize.sync({ alter: true });