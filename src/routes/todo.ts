import { Router } from "express";
import { ToDo } from "../models/ToDo";
import { v4 as uuidV4 } from "uuid";

export const todos = Router();

todos.get("", async (req, res, next) => {
  try {
    res.json(await ToDo.findAll());
  } catch (e) {
    next(e);
  }
});

todos.post("", async (req, res, next) => {
  try {
    const { text, isCompleted } = req.body;

    await ToDo.create({
      text,
      isCompleted: isCompleted || false,
      uuid: uuidV4()
    });

    res.json({
      ok: true,
      message: "posted"
    });
  } catch (e) {
    next(e);
  }
});

todos.patch("", async (req, res, next) => {
  try {
    const { text, isCompleted, uuid } = req.body;

    await ToDo.update({ text, isCompleted }, { where: { uuid } });

    res.json({ ok: true, message: "changed" });
  } catch (e) {
    next(e);
  }
});

todos.delete("", async (req, res, next) => {
  try {
    const { uuid } = req.body;

    await ToDo.destroy({
      where: {
        uuid
      }
    });

    res.json({ ok: true, message: "deleted" });
  } catch (e) {
    next(e);
  }
});
