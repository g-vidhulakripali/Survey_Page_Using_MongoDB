require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const { connectDB } = require("./db");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", routes);

const PORT = process.env.PORT;

async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

startServer();