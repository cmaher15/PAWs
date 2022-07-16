const router = require("express").Router();

module.exports = db => {
  ////////////////////////////////////////////////////////////////////

  // get all favourites
  router.get("/favourites", (req, res) => {
    db.query("SELECT * FROM favourites")
      .then(result => res.send(result.rows))
      .catch(err => console.error(err));
  });

  ////////////////////////////////////////////////////////////////////

  // specific favourite dog
  router.get("/favourites/:id", (req, res) => {
    const id = req.params.id;
    db.query(
      `SELECT dogs.name as dogs_name, dogs.breed, dogs.gender, dogs.age, dogs.size, dogs.reactive, dogs.good_with_reactive_dogs, dogs.size_compatibility, dogs.gender_compatibility, dogs.breed_incompatibility, dogs.description, dogs.photo_url as dogs_photo, owners.id as owners_id, owners.name as owners_name, owners.city as city, owners.thumbnail_photo_url as owners_photo FROM dogs JOIN owners ON dogs.owner_id = owners.id JOIN favourites ON dogs.id = favourites.dog_id WHERE favourites.owner_id = ${id}`
    )
      .then(result => {
        // console.log('info about the dog of specific owner: ',result.rows)
        res.send(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
      });
  });

  ////////////////////////////////////////////////////////////////////
  
  // Add to favourites
  router.post("/favourites", (req, res) => {
    const sql = `INSERT INTO favourites (owner_id, dog_id)
    VALUES ('${req.body.owner_id}', '${req.body.dog_id}')`;

    db
    .query(sql)
    .then(result => {
      console.log("Dog has been added to favourites");
      res.send(result.rows)
    })
    .catch(err => {console.error(err)});
  })
  
  ////////////////////////////////////////////////////////////////////

  // Delete from favourites
  // router.delete("/favourites/:id")

  return router;
}