const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .post(articlesController.create)
  .get(articlesController.findAll);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .delete(articlesController.remove);

module.exports = router;