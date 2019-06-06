import express from "express";
import { findById, list } from "../src/song";

const router = express.Router();

router.get("/", (req, res) => {
  const { page = 1, perPage = 10 } = req.query;
  res.json(list({ page, perPage }));
});

router.get("/:id", (req, res) => {
  const entry = findById(req.params.id);
  if (!entry) {
    res.sendStatus(404);
  } else {
    res.json(entry);
  }
});

router.put("/:id", (req, res) => {
  //TODO, use src/song/edit module
});

export { router };