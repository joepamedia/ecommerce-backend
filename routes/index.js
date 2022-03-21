const router = require("express").Router();
const apiRoutes = require("./api");
// /api directs you to the apiRoute folder
router.use("/api", apiRoutes);

// ran when a route isn't found
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
