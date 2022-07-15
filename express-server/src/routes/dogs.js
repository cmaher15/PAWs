const router = require("express").Router();

module.exports = (db) => {

  ////////////////////////////////////////////////////////////////////

  // get all dogs
  router.get("/dogs", (req, res) => {
    db
    .query(`SELECT * FROM dogs`)
    .then(result => res.send(result.rows))
    .catch(err => console.error(err));
  });

////////////////////////////////////////////////////////////////////

  // get dogs which are compatible with particular user
  router.get("/dogs/filter/:id", (req, res) => {
    const id = req.params.id;
    // const id = 1;

      db
      .query("SELECT * FROM dogs WHERE owner_id = $1", [id]) 
    
      .then((result)=> {
         
        const ownersCriteria = result.rows[0];
        console.log('result of ownersCriteria 1st', ownersCriteria);
        let sizeArray = [];
        sizeArray.push(ownersCriteria.size)
        console.log(sizeArray);
        // const sql = "SELECT * FROM dogs WHERE size_compatibility ?| $1 AND gender_compatibility ?| $2 AND reactive = $3 AND good_with_people = $4 AND size ?| $5 AND gender ?| $6"
        // return db.query(sql, [ownersCriteria.size, ownersCriteria.gender, ownersCriteria.reactive, ownersCriteria.good_with_people, Object.keys(ownersCriteria.size_compatibility), Object.keys(ownersCriteria.gender_compatibility)])

 //{ small: true }   ?|  [ 'large' ]

// {msmvsmvpsdopv}   ?|    ['']  
 
        const sql = "SELECT * FROM dogs WHERE reactive = $1 AND good_with_people = $2 AND size_compatibility ?| $3 AND owner_id != $4 AND size_compatibility ?| $5"
        return db.query(sql, [ownersCriteria.reactive, ownersCriteria.good_with_people, Object.keys(ownersCriteria.size_compatibility), id, sizeArray]);
      })
      .then(result => {
        console.log('result.rows 2nd query:', result.rows)
        res.send(result.rows)
      })
      .catch(err => {
        console.error(err.message)
        res.send({error:err.message})
      });


// {small: true} !== {small: true, "medium":true}


// AND size_compatibility @> $3 AND gender_compatibility @> $4 AND breed_incompatibility @> $5 AND owner_id != $6

//, ownersCriteria.size_compatibility, ownersCriteria.gender_compatibility, ownersCriteria.breed_incompatibility, id

  });
    

////////////////////////////////////////////////////////////////////

  //info about specific dog
  router.get("/dogs/:id", (req, res) => {
    const id = req.params.id;
    console.log('req.params:', req.params);
    db.query(
      `SELECT dogs.name as dogs_name, breed, gender, age, size, reactive, good_with_people, size_compatibility,gender_compatibility, breed_incompatibility,description, photo_url as dogs_photo, owners.name as owners_name, owners.city as city, owners.thumbnail_photo_url as owners_photo FROM dogs JOIN owners ON dogs.owner_id = owners.id WHERE dogs.owner_id = ${id}`
    )
      .then((result) => {
        // console.log('info about the dog of specific owner: ',result.rows)
        res.send(result.rows[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  ////////////////////////////////////////////////////////////////////

  // Create new dog
  router.post(`/dogs`, (req, res) => {
    // console.log(req.body);
    db.query(
      `
    INSERT INTO dogs 
    (name, breed, gender, age, size, reactive, good_with_people, size_compatibility, gender_compatibility, breed_incompatibility, description, photo_url, owner_id)
     VALUES 
     ('${req.body.name}', '${req.body.breed}', '${req.body.gender}', '${
        req.body.age
      }', '${req.body.size}', '${req.body.reactive}', '${
        req.body.good_with_people
      }', '${JSON.stringify(req.body.size_compatibility)}', '${JSON.stringify(
        req.body.gender_compatibility
      )}', '${JSON.stringify(req.body.breed_incompatibility)}', '${
        req.body.description
      }', '${req.body.photo_url}', 1)`
    )
      .then((result) => {
        console.log("New dog was successfully added");
        res.send(result.rows);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return router;
};

////////////////////////////////////////////////////////////////////

// CRUD

// CREATE = POST /dogs/:id   create a dog
// READ   = GET  /dogs       get matched dogs
// UPDATE = POST /dogs/:id   update dogs' info
// DELETE = POST /dogs/:id   delete user
