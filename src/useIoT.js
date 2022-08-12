import { useState, useEffect, useContext } from "react";

import IoTClientContext from "./IoTClientContext";

function useIoT(channel, options) {
  const IoTClient = useContext(IoTClientContext);

  const { initialData } = options || {};
  const [data, setData] = useState(initialData);

  useEffect(() => {
    function handle(message) {
      setData(message);
    }

    IoTClient.subscribe(channel, handle);

    return () => {
      IoTClient.unsubscribe(channel, handle);
    };
  }, [channel, IoTClient]);

  return { data };
}

export default useIoT;
