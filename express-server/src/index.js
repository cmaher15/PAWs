const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const app = require("./application")(ENV);
const server = require("http").Server(app);
const { Server } = require("socket.io");
const owner = require("../db");

// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ server });

// wss.on("connection", socket => {
//   socket.onmessage = event => {
//     console.log(`Message Received: ${event.data}`);

//     if (event.data === "ping") {
//       socket.send(JSON.stringify("pong"));
//     }
//   };
// });

const http = server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});

const owners = {};

const io = new Server(http);

io.on("connection", (owner) => {
  const name = owner.getName();
  console.log("Someone connected!", owner.id, name);
  owner.name = name;
  owners[name] = owner.id;
  console.log(owners);

  owner.broadcast.emit("server", `${name}: just connected`);

  owner.emit("name", name);

  owner.on("message", (data) => {
    console.log("message:", data);
    data.from = owner.name;

    const id = owners[data.to];
    console.log("message is for: ", data.to, id);
    io.to(id).emit("user", data);
    return;
  });

  owner.on("disconnect", () => {
    delete owners[owner.name];
    console.log("owner Disconnected!", owner.name);
  });
});
