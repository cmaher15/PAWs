const router = require("express").Router();
const cookieSession = require("cookie-session");

module.exports = (db) => {
  
  router.use(
    cookieSession({
      name: "session",
      keys: ["userId", "key2"],

      maxAge: 24 * 60 * 60 * 1000,
    })
  );

  router.get("/owners", (req, res) => {
    db.query(`SELECT * FROM owners`).then((result) => {
      res.send(result.rows);
    });
  });

  //info about specific owner
  router.get("/owners/:id", (req, res) => {
    const id = req.params.id
    // const id = req.session.user_id;
    db.query(`SELECT * FROM owners WHERE id = ${id}`).then(
      ({ rows: owners}) => {
        res.json(
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
    //const id = db.query(`SELECT id FROM owners WHERE id = 1`)
    console.log(req.body);
    // console.log(req.params);
    db.query(`
    INSERT INTO owners 
    (name, password, city, email, thumbnail_photo_url, location)
     VALUES 
     ('${req.body.name}', '${req.body.hashedpassword}', '${req.body.city}', '${req.body.email}', '${req.body.thumbnail_photo_url}', '(-194.0, 53.0)')`
    )
      .then((result) => {
        console.log("New owner was successfully added");
        res.json({
          statuscode: 200, 
          message: 'User was successfully created'
        })
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  // Login route
  router.post('/login', (req, res) => {
    
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    db
    .query(`SELECT * FROM owners WHERE email = ${userEmail}`)
    .then((result) => {
      if (bcrypt.compareSync(userPassword, result.password)) {
        res.json({
          statuscode: 200, 
          message: 'User login successful',
          userId: result.id
        });
      } else {
        return res.status(403).send("Incorrect password");
      }
    })
    .catch((err) => {
      res.status(403);
    })    
  });

  return router;
};




// CRUD

// CREATE = POST /owners/   create an account
// READ = GET /owners          get all the owners
// UPDATE = PUT /owners/:id   update owners info
// DELETE = POST /owners/:id   delete user
