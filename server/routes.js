const express = require("express");
const router = express.Router();
const { getDB } = require("./db");

router.post("/response", async (req, res) => {

  const db = getDB();

  const surveyResponse = {
    ...req.body,
    submittedAt: new Date()
  };

  await db.collection("responses").insertOne(surveyResponse);

  res.json({ message: "Response saved" });
});

router.get("/responses", async (req, res) => {

  const db = getDB();

  const responses = await db.collection("responses").find().toArray();

  res.json(responses);
});

module.exports = router;