const Game = require("../model/Game");

// Get All Games
const getAllGames = async (req, res, next) => {
    let games;
    try {
         games = await Game.find();
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  
    if (!games) {
      return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ games });
  };


// Read a Single Game
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let game;
    try {
      game = await Game.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!game) {
      return res.status(404).json({ message: "No Game found" });
    }
    return res.status(200).json({ game });
  };

// Create a Single Game
const addGame = async (req, res, next) => {
    const { 
        Name,
        Url,
        Authors,
        Published_date } = req.body;
    let game;
    try {
      game = new Game({
        Name,
        Url,
        Authors,
        Published_date
      });
      await game.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!game) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    console.log(game);
    return res.status(201).json({ game });
  };

// Update a Single Game
  const updateGame = async (req, res, next) => {
    const id = req.params.id;
    const { Name,
     Url,
    Authors,
    Publication_date } = req.body;
    let game;
    try {
      game = await Game.findByIdAndUpdate(id, {
      Name,
      Url,
      Authors,
      Publication_date
      });
      game = await Game.save();
    } catch (err) {
      console.log(err);
    }
    if (!game) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ game });
  };

  // Delete a Single Game
  const deleteGame = async (req, res, next) => {
    const id = req.params.id;
    let game;
    try {
      game = await Game.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!game) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };

  const searchGame = async (req, res,next) => {
    const page = parseInt(req.query.page) || 1; // Page number (default: 1)
    const perPage = parseInt(req.query.perPage) || 6; // Number of books per page (default: 10)
    const  query = req.query?.question;
  
    let games;
    try {
      const skip = (page - 1) * perPage;
  
      if(query) {
         games = await Game.find({
          $or: [{ Name: new RegExp(query, 'i') }, { Authors: new RegExp(query, 'i') }],
        }) // Adjust the limit as per your pagination needs
        // res.json(books);
      }
      
      // Fetch paginated books from the database
      else{
         games = await Game.find()
        .skip(skip)
        .limit(perPage);
      }
      
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
    return res.status(200).json({ games });
  };

exports.getAllGames = getAllGames;
exports.addGame = addGame;
exports.getById = getById;
exports.updateGame = updateGame;
exports.deleteGame = deleteGame;
exports.searchGame = searchGame;