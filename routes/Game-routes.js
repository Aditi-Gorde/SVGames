const express = require("express");
const router = express.Router();
const Game = require("../model/Game");
const gamesController = require("../controllers/game-controller");

// router.get("/", async (req, res, next) => {
//     let games;
//     try {
//          games = await Game.find();
//       } catch (err) {
//         res.status(500).json({ error: err.message });
//       }
  
//     if (!games) {
//       return res.status(404).json({ message: "No products found" });
//     }
//     return res.status(200).json({ games });
//   });
router.post("/", gamesController.addGame);
router.get("/:id", gamesController.getById);
router.put("/:id", gamesController.updateGame);
router.delete("/:id", gamesController.deleteGame);
router.get("/",gamesController.searchGame);


module.exports = router;