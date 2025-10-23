// import all the packages
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// setup express
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
    });

    // create / endpoint just to test
    app.get("/", (req, res) => {
    res.status(200).json("Eyes up, Guardian!");
    });

    // create end point that queries the database for posts and returns them
    app.get("/posts", async (req, res) => {
    const result = await db.query(`SELECT * FROM posts ORDER BY createdat DESC`);
    res.json(result.rows);
    });

    // create a POST endpoint that inserts new posts from the client into your database
    app.post("/posts", async (req, res) => {
    const guardiannameFromClient = req.body.guardianname;
    const titleFromClient = req.body.title;
    const storyFromClient = req.body.story;
    const activitytypeFromClient = req.body.activitytype;

    const data = await db.query(
        `INSERT INTO posts (guardianname, title, story, activitytype) VALUES ($1, $2, $3, $4)`,
        [
        guardiannameFromClient,
        titleFromClient,
        storyFromClient,
        activitytypeFromClient,
        ]
    );
    res.json({ status: "Guardian story uploaded to database" });
    });

    // create a POST endpoint to like a post
    app.post("/posts/:id/like", async (req, res) => {
    const idFromClient = req.params.id;

    const data = await db.query(
        `UPDATE posts SET likes = likes + 1 WHERE id = $1`,
        [idFromClient]
    );
    res.json({ status: "Post liked" });
    });

    // app.listen()
    app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});