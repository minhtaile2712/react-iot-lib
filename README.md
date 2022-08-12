# react-iot-lib

React library for IoT projects

## Usage

In index.js

```jsx
import { IoTClient, IoTClientProvider } from "react-iot-lib";
import { io } from "socket.io-client";

const host = "http://localhost:5000";
const socket = io(host);
const ioTClient = new IoTClient(socket);
```

Wrap your App component

```jsx
<IoTClientProvider client={ioTClient}>
  <App />
</IoTClientProvider>
```

At component

```jsx
import { useIoT } from "react-iot-lib";

function Thing() {
  const { data } = useIoT("hello");

  return (
    <div>
      <div>Thing</div>
      <div>{data} </div>
    </div>
  );
}

export default Thing;
```
