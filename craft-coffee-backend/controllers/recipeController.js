const Recipe = require('../models/recipeModel');

exports.getAllRecipes = (req, res) => {
  Recipe.getAllRecipes((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

exports.addRecipe = (req, res) => {
  const newRecipe = req.body;
  Recipe.addRecipe(newRecipe, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Recipe added successfully', recipeId: results.insertId });
    }
  });
};

exports.updateRecipe = (req, res) => {
  const { id } = req.params;
  const updatedRecipe = req.body;
  Recipe.updateRecipe(id, updatedRecipe, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Recipe updated successfully' });
    }
  });
};
