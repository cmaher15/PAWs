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
    //const id = req.params;
    const id = 1;
    let ownersDogs;

      db
      .query(`
        SELECT 
        reactive, 
        good_with_people,
        size_compatibility, 
        gender_compatibility, 
        breed_incompatibility 
        FROM dogs WHERE owner_id = ${id} 
      `) 
      .then(result => {
        ownersDogs = result.rows;
        console.log('result of ownersDogs 1st', ownersDogs);
        res.send(ownersDogs)
        // console.log('queryResult.size_compat', queryResult[0].size_compatibility)
      })
      
      .then(()=> {
        // console.log('result of ownersDogs 2nd: ', ownersDogs);
        // db
        // .query(`
        // SELECT * FROM dogs WHERE
        // reactive = ${ownersDogs.reactive}, 
        // good_with_people = ${ownersDogs.good_with_people}
        // `)
        // .then(result => {
        //   console.log('result.rows 2nd query:', result.rows)
        //   res.send(result.rows)
        // })     
        // .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
      

      // size_compatibility = ${ownersDogs.size_compatibility},
      // gender_compatibility = ${ownersDogs.gender_compatibility},
      // breed_incompatibility IS NOT ${ownersDogs.gender_compatibility}
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
