# react-iot-lib

React library for IoT projects

## Usage

In index.js

```jsx
const { io } = require("socket.io-client");
const io = io({ host: host, autoConnect: false });
client.on("connect", () => console.log("connect"));
client.on("disconnect", (reason) => console.log("disconnect:", reason));
client.on("connect_error", (err) => console.log("connect_error:", err.message));
client.connect();
```
