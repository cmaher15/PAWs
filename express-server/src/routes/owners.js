const router = require("express").Router();

module.exports = db => {
  router.get("/owners", (request, response) => {
    db.query(`SELECT * FROM owners`).then(({ rows: owners }) => {
      response.json(
        owners.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  return router;
};