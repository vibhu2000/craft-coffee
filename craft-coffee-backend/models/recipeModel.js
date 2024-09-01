const db = require('../config/db');

const Recipe = {
  getAllRecipes: (callback) => {
    const sql = 'SELECT * FROM recipes';
    db.query(sql, callback);
  },

  addRecipe: (recipe, callback) => {
    const sql = 'INSERT INTO recipes (name, ingredients, method) VALUES (?, ?, ?)';
    db.query(sql, [recipe.name, recipe.ingredients, recipe.method], callback);
  },

  updateRecipe: (id, recipe, callback) => {
    const sql = 'UPDATE recipes SET name = ?, ingredients = ?, method = ? WHERE id = ?';
    db.query(sql, [recipe.name, recipe.ingredients, recipe.method, id], callback);
  }
};

module.exports = Recipe;
