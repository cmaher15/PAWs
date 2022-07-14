const router = require("express").Router();

module.exports = (db) => {
  // get dogs

  router.get("/dogs", (req, res) => {
    const queryResult = [];
    const userId = 1;
    db.query(`SELECT dogs.reactive, dogs.good_with_people, dogs.size_compatibility, dogs.gender_compatibility, dogs.breed_incompatibility FROM dogs WHERE owner_id = ${userId}`).then(result => {
      queryResult.push(result.rows);

      
      console.log('queryResult inside initial query:',queryResult);
    }).catch(err => console.error(err))
    // console.log('req.body:', req.body);
    // const reactive = req.body.reactive;
    // const good = req.body.good_with_people;
    // const size = req.body.size_compatibility;
    // const gender = req.body.gender_compatibility;
    // const incompat = req.body.breed_incompatibility;
    //  const incompat = '{"pitbull": true}';
    
    db.query(`SELECT * FROM dogs`)
      .then((result) => {
        res.send(
          result.rows.filter(
            (dog) =>
              dog.reactive === true &&
              dog.good_with_people === true &&
              dog.size_compatibility.small === true &&
              dog.gender_compatibility.male === true &&
              dog.breed_incompatibility !== '{"pitbull: true"}'
          )
        );
      })
      .catch((err) => {
        console.error(err);
      });
  });

  //Playing around with bringing back dog and user data for the dog ID photo cards on UI
  // router.get("/dogs", (req, res) => {
  //   db.query(
  //     `SELECT dogs.name as name, breed, size, gender, photo_url, description, owners.name as owner name, owners.thumbnail_photo_url FROM dogs JOIN owners ON dogs.owner_id = owners.id `
  //   )
  //     .then((result) => {
  //       console.log(result);
  //       const output = result.rows;
  //       res.send(output);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  // get filtered dogs
  // const filterDogs = (user_id) => {
  //   db
  //   .query(`SELECT * FROM dogs JOIN owners ON owners.id = dogs.owner_id WHERE owners.id = ${user_id}`)
  //   .then((result) => console.log(result.rows))
  //   .catch(console.log('could not retrieve data'));
  // }

  //info about specific dog
  router.get("/dogs/:id", (req, res) => {
    const id = req.params.id;
    db.query(
      `SELECT dogs.name as name, breed, size, gender, photo_url, description, owners.name as owner_name, owners.thumbnail_photo_url FROM dogs JOIN owners ON dogs.owner_id = owners.id WHERE dogs.id = ${id}`
    )
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  //

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

// SELECT DOG NAME BY OWNERS ID
// select dogs.name from dogs join owners on owners.id = dogs.owner_id where owners.id = 1;

//

// CRUD

// CREATE = POST /dogs/:id   create a dog
// READ   = GET  /dogs       get matched dogs
// UPDATE = POST /dogs/:id   update dogs' info
// DELETE = POST /dogs/:id   delete user
