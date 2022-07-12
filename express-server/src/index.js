const PORT = process.env.PORT || 8001;
const ENV = require("./environment");
const app = require("./application")(ENV);
const server = require("http").Server(app);
const sock = require("socket.io");
// const client = require("./db");

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
  console.log(`Listening on port ${PORT} in ${ENV} mode`);
});

// const clients = {};
// console.log("socketio.Server", sock.Server);
// const io = new sock.Server(http);

// io.on("connection", (client) => {
//   const name = client;
//   console.log("Someone connected!", client.id, name);
//   client.name = name;
//   clients[name] = client.id;
//   console.log(clients);

//   client.broadcast.emit("server", `${name}: just connected`);

//   client.emit("name", name);

//   client.on("message", (data) => {
//     console.log("message:", data);
//     data.from = client.name;

//     if (data.to) {
//       const id = clients[data.to];
//       console.log("message is for: ", data.to, id);
//       io.to(id).emit("user", data);
//       return;
//     }
//     client.broadcast.emit("user", data);
//   });

//   client.on("disconnect", () => {
//     delete clients[client.name];
//     console.log("owner Disconnected!", client.name);
//   });
// });
