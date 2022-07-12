const router = require("express").Router();
const cookieSession = require("cookie-session");

module.exports = (db) => {
  const generateRandomString = () => {
    const result = Math.random().toString(36).substring(2, 8);
    return result;
  };

  router.use(
    cookieSession({
      name: "session",
      keys: ["user_id", "key2"],

      maxAge: 24 * 60 * 60 * 1000,
    })
  );

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

  //info about specific owner
  router.get("/owner/:id", (request, response) => {
    const id = request.session.user_id;
    db.query("SELECT * FROM owners WHERE id = $1", [id]).then(
      ({ rows: owners }) => {
        response.json(
          owners.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      }
    );
  });

  //Create new owner
  router.post(`/owners`, (req, res) => {
    console.log(req.body);
    console.log(req.params);
    db.query(
      `
    INSERT INTO owners 
    (name, password, city, email, thumbnail_photo_url, location)
     VALUES 
     ('${req.body.name}', '${req.body.hashedpassword}', '${req.body.city}', '${req.body.email}', '${req.body.thumbnail_photo_url}', '(-194.0, 53.0)')`
    )
      .then((result) => {
        console.log("New owner was successfully added");
        const ownerID = generateRandomString();
        req.session.user_id = ownerID;
        console.log(req.session.user_id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return router;
};

// CRUD

// CREATE = POST /owners/   create an account
// READ = GET /owners          get all the owners
// UPDATE = PUT /owners/:id   update owners info
// DELETE = POST /owners/:id   delete user
