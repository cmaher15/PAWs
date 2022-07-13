const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();
// const http = require("http");

const db = require("./db");

const dogs = require("./routes/dogs");
const owners = require("./routes/owners");

// const sock = require("socket.io");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8",
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(ENV) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());
  app.use(
    cookieSession({
      name: "session",
      keys: ["user_id", "key2"],

      maxAge: 24 * 60 * 60 * 1000,
    })
  );

  app.use("/api", dogs(db));
  app.use("/api", owners(db));

  ///CHAT CODE FOR SERVER SIDE///

  // const clients = {};
  // console.log("socketio.Server", sock.Server);

  // const io = new sock.Server(http);

  // io.on("connection", (db) => {
  //   const name = db;
  //   console.log("Someone connected!", db.id, name);
  //   db.name = name;
  //   clients[name] = db.id;
  //   console.log(clients);

  //   db.broadcast.emit("server", `${name}: just connected`);

  //   db.emit("name", name);

  //   db.on("message", (data) => {
  //     console.log("message:", data);
  //     data.from = db.name;

  //     if (data.to) {
  //       const id = clients[data.to];
  //       console.log("message is for: ", data.to, id);
  //       io.to(id).emit("user", data);
  //       return;
  //     }
  //     db.broadcast.emit("user", data);
  //   });

  //   db.on("disconnect", () => {
  //     delete clients[db.name];
  //     console.log("owner Disconnected!", db.name);
  //   });
  // });

  if (ENV === "development") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/01_schema.sql`)),
      read(path.resolve(__dirname, `db/seeds/01_seeds.sql`)),
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch((error) => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function () {
    return db.end();
  };

  return app;
};
