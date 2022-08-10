import { useState, useEffect } from "react";
import ContextClient from "./ContextClient";

function useContext(channel, options) {
  const { initialData } = options;
  const [data, setData] = useState(initialData);

  useEffect(() => {
    function handle(message) {
      setData(message);
    }

    ContextClient.subscribe(channel, handle);

    return () => {
      ContextClient.unsubscribe(channel, handle);
    };
  }, [channel]);

  return { data };
}

export default useContext;
