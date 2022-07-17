const router = require("express").Router();
const bcrypt = require("bcryptjs");


module.exports = (db) => {
  ////////////////////////////////////////////////////////////////////

  router.get("/owners", (req, res) => {
    db.query(`SELECT id, name, city, thumbnail_photo_url FROM owners`).then(
      (result) => {
        res.send(result.rows);
      }
    );
  });

  ////////////////////////////////////////////////////////////////////

  //info about specific owner
  router.get("/owners/:id", (req, res) => {
    const id = req.params.id;
    // const id = req.session.user_id;
    db.query(`SELECT * FROM owners WHERE id = ${id}`)
      .then((result) => {
        // console.log('info about the dog of specific owner: ',result.rows)
        res.send(result.rows[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  ////////////////////////////////////////////////////////////////////

  //Create new owner
  router.post(`/owners`, (req, res) => {
    //const id = db.query(`SELECT id FROM owners WHERE id = 1`)
    // console.log(req.body);
    // console.log(req.params);
    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(req.body.password, salt);
    db.query(
      `
    INSERT INTO owners 
    (name, password, city, email, thumbnail_photo_url, location)
     VALUES 
     ('${req.body.name}', '${hashedpassword}', '${req.body.city}', '${req.body.email}', '${req.body.thumbnail_photo_url}', '(-194.0, 53.0)')`
    )
      .then((result) => {
        console.log("New owner was successfully added");
        res.json({
          statuscode: 200,
          message: "User was successfully created",
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  ////////////////////////////////////////////////////////////////////

  // Login route
  router.post("/login", (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    db.query(`SELECT * FROM owners WHERE email = '${userEmail}'`)
      .then((result) => {
        if (bcrypt.compareSync(userPassword, result.rows[0].password)) {
          res.cookie("userId", result.rows[0].id);
          res.status(200).send(result.rows[0].id.toString());
        } else {
          return res.status(403).send("Incorrect password");
        }
      })
      .catch((err) => {
        console.log(err);
        return res.sendStatus(403);
      });
  });

  ////////////////////////////////////////////////////////////////////

  // Logout route
  router.post("/logout", (req, res) => {
    res.clearCookie("userId").send("Cookies were cleared");
  });

  return router;
};
