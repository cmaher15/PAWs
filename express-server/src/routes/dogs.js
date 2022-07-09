const router = require("express").Router();

module.exports = db => {
  router.get("/dogs", (request, response) => {
    db.query(`SELECT * FROM dogs`).then(({ rows: dogs }) => {
      response.json(
        dogs.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  return router;
};